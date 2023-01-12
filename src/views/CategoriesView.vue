/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:18:06 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:29:37
 */

 <!--View som visar alla kategorier -->
<template>
    <div class="flex">
        <div>

            <NavBar />

        </div>

        <div class="bg-light-color main py-4 self-baseline">

            <!--Använder komponenten med cirkeln som länkar till addcategory-->
            <div class="absolute right-8 top-0">
                <CircleButton />
            </div>
            <h2 class="font-bold text-center text-xl">Kategorier</h2>

            <!--Meddelande som meddelar om kategori tagits bort-->
            <div class="text-sm font-content text-center text-dark-color py-3" v-if="deletedMsg">
                {{ deletedMsg }} <i class="fa-solid fa-circle-check text-green-600"></i>
            </div>
            <div class="grid grid-cols-3 gap-4 px-3 py-6 md:grid-cols-4 lg:grid-cols-4 justify-center">

                <!--Använder komponenten Category-->
                <Category v-for="category in categories" @deleteCategory="deleteCategory(category._id)"
                    @getId="getById(category._id)" :category="category" :key="category._id" />
            </div>
        </div>
    </div>

</template>


<script>

import Category from '../components/Category.vue';
import CircleButton from '../components/CircleButton.vue';
import NavBar from '../components/Navbar.vue';


export default {
    components: {
        Category,
        CircleButton,
        NavBar
    },
    data() {
        return {
            categories: [],
            category_name: "",
            category: null,
            deletedMsg: ""
        }
    },
    methods: {
        //Hämtar alla kategorier
        async getCategories() {
            const resp = await fetch("http://localhost:3000/categories", {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await resp.json();
            this.categories = data;
        },
        //Hämtar specifik produkt utifrån dess id och anropar getCategories
        async getById() {
            const resp = await fetch("http://localhost:3000/categories/" + this.id, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            });
            const data = await resp.json();
            this.category = data;
        },
        //Metod för att ta bort kategori
        async deleteCategory(id) {
            const resp = await fetch("http://localhost:3000/categories/" + id, {
                //Använder metoden DELETE
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });
            const data = await resp.json();

            this.deletedMsg = "Kategorin har raderats";
            //Hämtar podcasterna på nytt
            this.getCategories();
        }
    },
    mounted() {
        this.getCategories();
    }
}

</script>

<style scoped>
.main {
    max-width: 700px;
    width: 100%;
    margin: 2rem auto;
    position: relative;
}
</style>