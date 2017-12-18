<template>
  <div id="app">
    <navbar></navbar>
    <main-container></main-container>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import mainContainer from './components/MainContainer.vue'

  export default {
    name: 'app',
    
    data: function(){
      return {
       
      }
    },

    components: {
      Navbar,
      mainContainer
    }
  }
</script>

<style>

</style>
