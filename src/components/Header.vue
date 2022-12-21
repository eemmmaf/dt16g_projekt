<template>
    <!--Header-->
       <header class="border-b-2 p-2 shadow-s bg-light-color">
        <div class="flex justify-between">
            <div>
        <router-link to="/">
        <h1 class="font-headings text-xl font-bold ml-1">Inköpslistan</h1>
        </router-link>

    </div>

    <div>
        <LogoutBtn />

    </div>
    </div>

</header>
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
h1{
    text-decoration: underline;
    text-decoration-color: #FFF95E;
}
</style>