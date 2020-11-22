<template>
  <div id="app">
     <header >
        <Navbar />
    </header>
     
        <router-view />
      
  </div>
</template>

<script>
import Navbar from './layout/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
}
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

body {
  font-family: 'montserrat', sans-serif;
  background-color: #0277bd;
  color: #263238;
}
header {
  width: 100vw;
  background-color: white;
  padding: 15px;
  position: fixed;
  z-index: 1;
}

</style>

