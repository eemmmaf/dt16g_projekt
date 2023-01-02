<template>
    <!--Header-->
       <header class="border-b-2 p-2 shadow-s bg-light-color">
        <div class="flex justify-between">
            <div>
        <router-link to="/">
        <h1 class="font-headings text-xl font-bold ml-1">Inköpslistan</h1>
        </router-link>
     </div>

     <div class="justify-self-end">
        <SearchBox />
     </div>

    <div class="self-center">
        <LogoutBtn />

    </div>
    </div>

</header>

</template>

<script>
import LogoutBtn from '../components/LogoutBtn.vue';
import SearchBox from '../components/Searchbox.vue';

export default {
    components: {
        LogoutBtn,
        SearchBox
    }
}
</script>

<style scoped>
h1{
    text-decoration: underline;
    text-decoration-color: #FFF95E;
}
</style>