<template>
    <button @click="logOut()" class="bg-main-color p-2 text-base rounded-md shadow-md mr-2 hover:bg-light-color">Logga ut</button>
</template>



<style scoped>


</style>

<script>

export default {
    methods: {
 //Funktion för att logga ut. Anropas på knappen logga ut
  logOut() {
            //Tömmer localstorage
            localStorage.clear();
            //Tar använder till login-sida
            this.$router.push('/login');
        }
    }
}


</script>