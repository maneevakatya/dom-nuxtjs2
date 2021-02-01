<template lang="pug">
  section.index1
    <index/>
    <About/>
    <Equipment/>
    <Systems/>
</template>

<script>
import index from '@/pages/index'
import About from '@/pages/About'
import Equipment from '@/pages/Equipment'
import Systems from '@/pages/Systems'

export default {
  components:{
    index,
    About,
    Equipment,
    Systems

  }
}
</script>