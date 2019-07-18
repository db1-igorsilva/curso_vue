<template>

  <div id="app">

    <main-nav :routes="routes"/>

    <transition name="page">
      <router-view></router-view>
    </transition>
    
  </div>

</template>

<script>
  import { routes } from './routes';
  import Navigator from './components/shared/navigator/Navigator.vue'

  export default {

    components: {
      'main-nav' : Navigator
    },

    data () {
      return {
        routes : routes.filter(route => route.menu)
      }
    }

  }
</script>

<style lang="scss">

  @import './App.scss';

</style>
