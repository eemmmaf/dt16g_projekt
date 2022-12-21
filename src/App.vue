<template>
  <div class="pagecontainer">
  <Header />
</div>
  <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';


export default {
    components: {
      Header
    }
}

</script>

<style scoped>
.pagecontainer {
    position: relative;
    min-height: 100vh;
}
</style>

