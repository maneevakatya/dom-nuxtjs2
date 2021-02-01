#!/bin/sh

/start_nginx.sh -D
status=$?
if [ $status -ne 0 ]; then
  echo "Nginx Failed: $status"
  exit $status
  else echo "Starting Nginx: OK"
fi

sleep 2

/start_node.sh &>/var/log/nodejs_all.log &
status=$?
if [ $status -ne 0 ]; then
  echo "node Failed: $status"
  exit $status
  else echo "Starting NODEJS: OK"
fi

sleep 2

while /bin/true; do
  ps aux | grep '/usr/bin/node /front/node_modules/.bin/nuxt start' | grep -q -v grep
  NODEJS_STATUS=$?
  echo "Checking NODEJS, Status Code: $NODEJS_STATUS"
  sleep 2

  ps aux | grep 'nginx: master process' | grep -q -v grep
  NGINX_STATUS=$?
  echo "Checking NGINX, Status Code: $NGINX_STATUS"
  sleep 2

  if [ $NODEJS_STATUS -ne 0 ];
    then
      curl -F file='@/var/log/nodejs_all.log' -F "initial_comment=NODEJS SHUTDOWN, ERROR LOG" -F channels=$SLACK_CHANNEL -H "Authorization: Bearer $SLACK_KEY" https://slack.com/api/files.upload
      echo "$(date +%F_%T) FATAL: NODEJS Raised a Status Code of $NODEJS_STATUS and exited"
      exit -1

   elif [ $NGINX_STATUS -ne 0 ];
     then
       echo "$(date +%F_%T) FATAL: NGINX Raised a Status Code of $NGINX_STATUS and exited"
       exit -1

   else
     sleep 2
        echo "$(date +%F_%T) - HealtCheck: NGINX and NODEJS: OK"
  fi
  sleep 60
done

