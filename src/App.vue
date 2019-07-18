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
  $font: Helvetica, sans-serif;

  #app {
    font-family: $font;
    text-align: center;
    color: #000;
    margin-top: 50px;
    width: 95%;
    margin: 0 auto;
  }

  .page-enter, .page-leave-active {
    opacity: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity.5s;
  }

</style>
