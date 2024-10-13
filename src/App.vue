<script>
import AppHeader from './components/AppHeader.vue'

import AppMain from './components/homepage/AppMain.vue';
import MainProject from './components/pages/MainProject.vue';

export default{
  components:{
    AppHeader,
    MainProject,
    AppMain,


  },
    data() {
        return{
            
        }
    }
}
</script>

<template>
  <AppHeader />
  <Router-view></Router-view>

</template>

<style lang="scss">
@import url("/styles/general.scss");


</style>