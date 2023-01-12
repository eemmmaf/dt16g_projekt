/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:18:28 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:32:02
 */


<!--View där alla varor skrivs ut i listan-->

<template>
    <div class="flex">
        <div>
            <NavBar />
        </div>
        <div class="maincontent  shadow-lg relative top-5">
            <div class="responsive-table bg-light-color border">
                <h2 class="text-dark-color font-headings font-bold text-xl mt-5 mb-9 w-full table-auto">Min
                    inköpslista</h2>

                <!--Här skrivs felmeddelande ut-->
                <div v-if="emptyMsg">
                    <p class="text-center">{{ emptyMsg }}</p>

                </div>

                <!--Använder komponenten List-->
                <List @delete="deleteItem(list._id)" @getId="getId(list._id)" v-for="list in items " :list="list"
                    :key="list._id" />
            </div>
        </div>
    </div>



</template>

<script>
import { onMounted } from 'vue';
import List from '../components/List.vue';
import NavBar from '../components/Navbar.vue';

//Importerar komponenten Category
import Category from '../components/Category.vue';


export default {
    data() {
        return {
            items: [],
            emptyMsg: "",
            categories: [],
            category_name: "",
            category: ""
        }
    },
    components: {
        List,
        Category,
        NavBar
    },


    methods: {
        //Hämtar alla produkter
        async getList() {
            const resp = await fetch("http://localhost:3000/items", {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await resp.json();
            this.items = data;

            //Sorterar utifrån kategori
            this.items.sort(function (a, b) {
                return a.category.localeCompare(b.category);
            });

            //Kollar om det finns några produkter sparade och skriver annars ut meddelande
            if (this.items.length === 0) {
                this.emptyMsg = "Listan är tom."
            }
        },
        //Hämtar klickad produkt
        async getId(id) {
            const resp = await fetch("http://localhost:3000/items/" + id, {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + this.token
                }
            });
            const data = await resp.json();
        },
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

        //Tar bort utifrån id
        async deleteItem(id) {
            const resp = await fetch("http://localhost:3000/items/" + id, {
                //Använder metoden DELETE
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                }
            });
            const data = await resp.json();
            //Hämtar podcasterna på nytt
            this.getList();
        }
    },
    mounted() {
        this.getList();
        this.getCategories();
    }
}

</script>

<style scoped>
.maincontent {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    min-height: 80vh;
}

h2 {
    text-align: center;
    margin-top: 1rem;
}

table {
    width: 100%;
}

tr {
    border-bottom: 0.5px solid rgb(193, 193, 193);
}

.highlight {
    background-color: red;
}

tr:hover {
    cursor: pointer;
}
</style>