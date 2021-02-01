FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY nuxt.config.js /front/nuxt.config.js
COPY .nuxt /front/.nuxt/
COPY package.json /front/package.json
COPY data.js /front/data.js
RUN  adduser --disabled-password -s /sbin/nologin www
EXPOSE 80


ARG SLACK_KEY
ARG SLACK_CHANNEL

ARG BACK_ENV

ENV NODE_ENV='production'

ENV SLACK_KEY=$SLACK_KEY
ENV SLACK_CHANNEL=$SLACK_CHANNEL

ENV BACK_ENV=$BACK_ENV

RUN touch /var/log/nodejs_all.log
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log
RUN ln -sf /dev/stdout /var/log/nodejs_all.log

RUN apk add --no-cache --update nodejs yarn curl  yarn

COPY start_nginx.sh /start_nginx.sh
COPY start_node.sh /start_node.sh
COPY wrapper.sh /wrapper.sh

RUN chmod +x /start_nginx.sh /start_node.sh /wrapper.sh
RUN cd /front && yarn --production=false

CMD ["/wrapper.sh"]