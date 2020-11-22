<template>
    <div class="nav" >
       <header >
            <Navbar />
        </header>

        <router-view/>

     </div>
        
</template>

<script>
import Navbar from './Navbar'


export default {
    name: 'Base',
    components: {
        Navbar
    },
    
}
</script>

<style scoped>
header {
  width: 100vw;
  background-color: white;
  padding: 15px;
  position: fixed;
  z-index: 1;
}

</style>