/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:17:49 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:27:27
 */

<!--View för att lägga till vara i listan-->
<template>
    <div class="flex">
        <div>
            <Navbar />
        </div>


        <div class="bg-light-color maincontent self-baseline">
            <h2 class="text-center font-headings text-xl font-bold">Lägg till i handlingslista</h2>
            <!--Formulär-->
            <form @submit.prevent="addItem()">

                <!--Skriver ut meddelande om produkten läggs till-->
                <div class="text-sm font-content text-center text-dark-color font-bold" v-if="success">
                    {{ success }} <i class="fa-solid fa-circle-check text-green-600"></i>
                </div>

                <!--Föremålets namn-->
                <div class="input">
                    <label class="font-bold font-headings" for="name">Namn </label><br>
                    <input v-model="name" type="text" id="namn" name="namn"
                        class="border-solid border border-slate-400 shadow-md rounded bg-white p-1">
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div v-if="errorName">
                        <span class="text-complement-color font-bold">{{ errorName }}</span>
                    </div>
                </div>

                <!--Kategori-->
                <div class="input">
                    <label class="font-bold font-headings" for="category">Kategori </label><br>


                    <!--Select med kategorier-->
                    <select v-model="category_item"
                        class="border-solid border border-slate-400 shadow-md rounded bg-white p-1">7
                        <option value="">Välj kategori</option>
                        <option v-for="category_item in categories" :value="category_item.category_name">
                            {{ category_item.category_name }}
                        </option>
                    </select>

                    <!--Felmeddelande-->
                    <div v-if="errorCategory">
                        <span class="text-complement-color font-bold">{{ errorCategory }}</span>
                    </div>
                </div>

                <!--Mått och antal-->
                <div class="flexcontainer">
                    <div class="flex justify-between">
                        <div>
                            <label class="font-bold font-headings" for="quantity">Antal </label>
                            <input class="p-1 border-solid border border-slate-400 rounded" type="number" id="quantity"
                                name="quantity" v-model="quantity">

                            <!--Felmeddelande-->
                            <div v-if="errorQuantity">
                                <span class="text-complement-color font-bold">{{ errorQuantity }}</span>
                            </div>
                        </div>


                        <!--Måttenhet-->
                        <div class="input">
                            <label class="font-bold font-headings" for="measure">Måttenhet </label><br>
                            <!--Select med olika enheter-->
                            <select v-model="select"
                                class="border-solid border border-slate-400 shadow-md rounded bg-white p-1">7
                                <option value="">Enhet</option>
                                <option v-for="select in measures" :value="select.unit">
                                    {{ select.unit }}
                                </option>
                            </select>

                            <!--Felmeddelande-->
                            <div v-if="errorMeasure">
                                <span class="text-complement-color font-bold">{{ errorMeasure }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Knapp för att lägga till-->
                <div class="mt-8">
                    <button class="p-3 rounded-md shadow-md bg-complement-color" type="submit">Lägg till
                    </button>
                </div>


            </form>
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar
    },
    data() {
        return {
            name: "",
            unit: "",
            measures: [],
            quantity: "",
            categories: [],
            category_name: "",
            select: "",
            success: "",
            category_item: "",
            errorName: "",
            errorQuantity: "",
            errorCategory: "",
            errorName: "",
            categoryError: "",
            errorMeasure: ""
        }
    },
    methods: {
        async addItem() {
            if (this.name && this.select && this.quantity != "") {
                if (this.category_item == "") {
                    this.category_item = "Ospecificerat";
                }

                let createdBody = {
                    name: this.name,
                    category: this.category_item,
                    measure: this.select,
                    quantity: this.quantity
                };

                //Fetch-anrop med metoden POST
                const resp = await fetch("http://localhost:3000/items", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(createdBody)
                });

                this.success = "Vara tillagd";

                this.errorName = "";
                this.errorQuantity = "";
                this.errorMeasure = "";
                this.errorCategory = "";


            } else {
                this.errorName = "";
                this.errorQuantity = "";
                this.errorMeasure = "";
                this.errorCategory = "";

                if (this.name == "") {
                    this.errorName = "Namn måste fyllas i";
                }

                if (this.category_item == "") {
                    this.errorCategory = "Kategori måste väljas";
                }


                if (this.select == "") {
                    this.errorMeasure = "Mått måste väljas";
                }



                if (!this.quantity) {
                    this.errorQuantity = "Antal måste fyllas i";
                }
            }
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
        //Hämtar alla måttenheter
        async getMeasures() {
            const resp = await fetch("http://localhost:3000/measure", {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            });
            const data = await resp.json();
            this.measures = data;
        }
    },
    mounted() {
        this.getCategories();
        this.getMeasures();
    }
}


</script>

<style scoped>
.maincontent {
    max-width: 500px;
    width: 100%;
    margin: 1rem auto;
}

h2 {
    text-align: center;
    margin-top: 1rem;
}

.input {
    max-width: 300px;
    width: 100%;
    margin: 2rem auto;
    display: block;
}

input[type="text"],
select {
    width: 100%;
}

input[type="number"],
#measure {
    max-width: 250px;
    width: 100%;
}


form {
    max-width: 500px;
    width: 100%;
}

.flexcontainer {
    max-width: 350px;
    width: 100%;
    display: block;
    margin: auto;
}

.flexcontainer div {
    margin: 0.5rem;
}

button {
    max-width: 200px;
    width: 100%;
    margin: 3rem auto;
    display: block;
    color: white;
}

@media only screen and (max-width: 750px) {
    .maincontent {
        min-height: 70vh;
    }
}
</style>