/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:16:20 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:21:25
 */


<template>
    <!--Kontroll om användaren är på logga-in-sidan. Skriver inte ut detta om det är så-->
        <div v-if="$route.name !== 'login'">
    <footer class="mt-11 p-2 bg-light-color shadow-md">
        <p class="text-dark-color">Projektuppgift i DT162G</p>

        

    </footer>
    </div>


</template>

<script>

</script>

<style scoped>
p{
    text-align: center;
}

footer {
    width: 100%;
    padding: 1rem;
    position: absolute;
    bottom: 0;
}
</style>