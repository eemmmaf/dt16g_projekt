/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:17:22 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:26:26
 */

<!--View där användaren kan lägga till kategorier-->
<template>
    <div class="flex">
        <div>
            <NavBar />
        </div>
        <div class="maincontent bg-light-color">
            <h2 class="font-bold text-xl text-center py-3">Lägg till kategori</h2>

            <!--Skriver ut meddelande om kategori skapas-->
            <div class="text-center" v-if="success">
                <p>{{ success }} <i class="fa-solid fa-circle-check text-green-600"></i></p>

            </div>

            <!--Formulär där kategorins innehåll skrivs ut så att användaren kan ändra-->
            <form class="mt-2 p-6" @submit.prevent="addCategory()">
                <div class="flex justify-evenly">

                    <div>
                        <label class="font-bold" for="categoryname">Kategorins namn:</label><br>
                        <input type="text" v-model="category_name"
                            class="border-solid border border-slate-400 shadow-md rounded mt-1 bg-white p-1">

                        <!-- Kontroll om felmeddelande och skriver ut om fel -->
                        <div v-if="nameError">
                            <span class="text-complement-color font-bold">{{ nameError }}</span>
                        </div>

                    </div>
                    <!--Knapp för att lägga till-->
                    <div class="self-center mt-2">
                        <button class="p-3 rounded-md shadow-md bg-complement-color text-light-color" type="submit">Lägg
                            till
                        </button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import NavBar from '../components/Navbar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            category_name: "",
            success: "",
            nameError: ""
        }
    },
    methods: {
        async addCategory() {
            if (this.category_name != "") {
                let createdBody = {
                    category_name: this.category_name
                };

                //Fetch-anrop med metoden POST
                const resp = await fetch("http://localhost:3000/categories", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(createdBody)
                });

                this.success = "Kategori skapad";

                this.nameError = "";


            } else {
                this.nameError = "";

                if (this.category_name == "") {
                    this.nameError = "Namn måste fyllas i";
                }
            }
        }
    }
}

</script>

<style scoped>
.maincontent {
    max-width: 500px;
    width: 100%;
    margin: 4rem auto;
    align-self: baseline;
}

button {
    max-width: 200px;
    width: 100%
}
</style>