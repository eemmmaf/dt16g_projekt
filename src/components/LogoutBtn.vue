/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:16:43 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:23:35
 */

<!--Komponent för logga-ut-knapp -->
<template>
    <!--Anropar metoden logOut() vid klick-->
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