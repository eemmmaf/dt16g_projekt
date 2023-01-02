<template>

    <!--Flexcontainer för layouten-->
    <div class="flex">
        <!--Navigeringen som sidebar-->
        <div class="">
            <Navbar />
        </div>

        <div class="centered">
            <Frontlist />


        </div>


        <div class="centered2">
            <FrontSingleList />
        </div>



    </div>
    <!--Slut på flexbox-->

</template>

<script>
import Navbar from '../components/Navbar.vue';
import Frontlist from '../components/Frontlist.vue';
import FrontSingleList from '../components/FrontSingleList.vue';

export default {
    components: {
        Navbar,
        Frontlist,
        FrontSingleList
    }
}

</script>

<style scoped>
.centered{
    max-width: 600px;
    width: 100%;
    margin: 1.5rem auto;
}

.centered2{
    max-width: 350px;
    width: 100%;
    margin: 1.5rem auto;
}
</style>

