/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:16:51 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2023-01-12 02:16:51 
 */


<template>
    <div v-if="$route.name !== 'login'">
        <nav class="bg-light-color shadow-md desktop">
            <ul class="">
                <!--Lägga till föremål-->
                <router-link to="/addlist">
                    <li class="text-sm font-headings font-bold text-dark-color">
                        <i class="fa-solid fa-carrot text-orange-800"></i> Lägg till
                    </li>
                </router-link>

                <router-link to="/categories">
                    <li class="text-sm font-headings font-bold text-dark-color">
                        <i class="fa-solid fa-pen"></i> Kategorier
                    </li>
                </router-link>

                <router-link to="/addmember">
                    <li class="text-sm font-headings font-bold text-dark-color">
                        <i class="fa-solid fa-user-plus"></i> Medlem
                    </li>
                </router-link>
            </ul>
        </nav>




        <!--Meny för mobil-->


        <!--Mobil-->
        <nav class="max-w-sm font-headings text-base mobile">
            <!--Visar menyn vid klick för mobil-->
            <button @click='toggle = !toggle' class="btn text-medium-color z-20">
                <i class="fa-solid fa-bars"></i>
            </button>
            <!--Mobilmeny-->
            <div v-show="toggle">
                <div
                    class="fixed z-10 right-0 top-0 flex flex-col items-center w-48 overflow-hidden text-dark-color rounded bg-white border-solid border-2 h-screen">
                    <ul class="mt-20">
                                   <!--Skapa ny lista-->
                <router-link to="/addlist">
                    <li class="text-sm font-headings font-bold text-dark-color">
                        <i class="fa-solid fa-carrot text-orange-800"></i> Lägg till
                    </li>
                </router-link>

                <router-link to="/categories">
                    <li class="text-sm font-headings font-bold text-dark-color">
                        <i class="fa-solid fa-pen"></i> Kategorier
                    </li>
                </router-link>

                <router-link to="/addmember">
                    <li class="text-sm font-headings font-bold text-dark-color">
                        <i class="fa-solid fa-user-plus"></i> Medlem
                    </li>
                </router-link>
                    </ul>

                    <div class="mt-4">
                    <LogOutBtn />
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import LogOutBtn from '../components/LogoutBtn.vue';
export default {
    components: {
        LogOutBtn
    },
    data() {
        return {
            toggle: false
        }
    }
}

</script>

<style scoped>
li {
    padding: 3rem 1rem;
}

nav {
    min-height: 100vh;
    max-width: 150px;
    width: 100%;
    border-bottom-right-radius: 20px;
}

.btn {
    font-size: 1.7em;
    position: absolute;
    top: 0.5%;
    right: 3%;
}

@media only screen and (max-width: 830px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }
}


@media only screen and (min-width: 830px) {
    .btn {
        display: none;
    }

    .mobile{
        display: none;
    }

}
</style>