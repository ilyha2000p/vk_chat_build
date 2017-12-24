<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import MainContainer from './components/MainContainer.vue'

  export default {
    name: 'app',
    
    data: function(){
      return {
       
      }
    },

    components: {
      Navbar,
      MainContainer,
    }
  }
</script>

<style> 
  body{
    background-color: #edeef0 !important;
  }
</style>
