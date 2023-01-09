
<template>
  <div class="pagecontainer">
    <div class="wrapper">
    <Header />
    <main>
      <RouterView />
    </main>
    </div>
    <Footer />
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    Header,
    Navbar,
    Footer
  }
}



</script>

<style scoped>
.pagecontainer {
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url("./assets/background.jpg");
  background-size: cover;
}

.wrapper{
    padding-bottom: 4rem; 
}
</style>

