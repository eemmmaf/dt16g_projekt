/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:16:27 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:22:08
 */

<!--Komponent för header-->
<template>
    <!--Kontroll om användaren är på logga-in-sidan. Skriver inte ut detta om det är så-->
    <div v-if="$route.name !== 'login'">
        <header class="border-b-2 p-2 shadow-s bg-light-color">
            <div class="flex justify-between">
                <div>
                    <router-link to="/">
                        <h1 class="font-headings text-xl font-bold ml-1">Inköpslistan</h1>
                    </router-link>
                </div>


                <!--Komponent med knapp för at tlogga ut-->
                <div class="self-center logout">
                    <LogoutBtn />

                </div>
            </div>

        </header>
    </div>

</template>

<script>
import LogoutBtn from '../components/LogoutBtn.vue';

export default {
    components: {
        LogoutBtn
    }
}
</script>

<style scoped>
h1 {
    text-decoration: underline;
    text-decoration-color: #FFF95E;
}

@media only screen and (max-width: 830px) {
    .logout {
        display: none;
    }
}
</style>