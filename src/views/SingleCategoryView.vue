<template>
    <div class="flex">
        <div>
            <NavBar />
        </div>

        <!--Formulär där kategorins innehåll skrivs ut så att användaren kan ändra-->
        <div class="maincontent bg-light-color">
            <div v-if="category">
                <h2 class="font-bold text-xl text-center py-3">Ändra kategori</h2>
                <div class="text-center" v-if="success">
                    <p>{{ success }} <i class="fa-solid fa-circle-check text-green-600"></i></p>

                </div>
                <form class="mt-2 p-6" @submit.prevent="updateCategory(category)">
                    <div class="flex justify-evenly">

                        <div>
                            <label class="font-bold" for="categoryname">Kategorins namn:</label><br>
                            <input type="text" v-model="category.category_name"
                                class="border-solid border border-slate-400 shadow-md rounded mt-1 bg-white p-1">
                        </div>
                        <!--Knapp för att lägga till-->
                        <div class="self-center mt-2">
                            <button class="p-3 rounded-md shadow-md bg-complement-color text-light-color"
                                type="submit">Spara
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>

</template>

<script>
import NavBar from '../components/Navbar.vue';

export default {
    props: ['id'],
    components: {
        NavBar
    },
    data() {
        return {
            category: null,
            category_name: "",
            success: "",
            nameError: "",
            deleted: ""
        }
    },
    methods: {
        //Uppdaterar produkt
        async updateCategory(category) {
            if (category.category_name != "") {
                let updatedBody = {
                    id: this.id,
                    category_name: category.category_name
                };
                //Fetch-anrop med metoden PUT
                const resp = await fetch("http://localhost:3000/categories/" + this.id, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(updatedBody)
                });

                //Lagrar meddelande om kategorin uppdateras 
                this.success = "Kategorin har uppdaterats";
                this.nameError = "";
                this.descriptionError = "";
            } else {
                //Gör meddelandena tomma
                this.success = "";
                this.nameError = "";
                this.descriptionError = "";
                //Kontroll om namn fyllts i och lagrar felmeddelande
                if (!category.categoryname) {
                    this.nameError = "Namn måste fyllas i";
                }
                //Kontroll om kategoribeskrivning fyllts i och lagrar felmeddelande
                if (!category.categorydescription) {
                    this.descriptionError = "Beskrivning måste fyllas i";
                }
            }
        },
        async getCategoryId() {
            const resp = await fetch("http://localhost:3000/categories/" + this.id, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            });
            const data = await resp.json();
            this.category = data;
        }
    },
    mounted() {
        this.getCategoryId();
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