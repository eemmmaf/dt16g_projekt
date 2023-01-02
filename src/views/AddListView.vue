<template>
    <div class="flex">
        <div>
            <Navbar />
        </div>
        <div class="bg-light-color maincontent">
            <h2>Lägg till i handlingslista</h2>
            <!--Formulär-->
            <form @submit.prevent="addItem()">

                <!--Skriver ut meddelande om produkten läggs till-->
                <div class="text-base font-content font-bold text-dark-color" v-if="success">
                    {{ success }} <i class="fa-solid fa-circle-check text-green-600"></i>
                </div>

                <!--Föremålets namn-->
                <div class="input">
                    <label class="font-bold font-headings" for="name">Namn </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                    <input v-model="name" type="text" id="namn" name="namn"
                        class="border-solid border border-slate-400 shadow-md rounded bg-white p-1">
                    <!-- Kontroll om felmeddelande och skriver ut om fel -->
                    <div class=" text-error font-bold font-content" v-if="nameError">
                        <span>{{ nameError }}</span>
                    </div>
                </div>

                <!--Kategori-->
                <div class="input">
                    <label class="font-bold font-headings" for="category">Kategori </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>

                        
                    <!--Select med kategorier-->
                    <select v-model="category_item"
                        class="border-solid border border-slate-400 shadow-md rounded bg-white p-1">7
                        <option value="">Välj kategori</option>
                        <option v-for="category_item in categories" :value="category_item.category_name">
                            {{ category_item.category_name }}
                        </option>
                    </select>
                </div>

                <!--Mått och antal-->
                <div class="flexcontainer">
                    <div class="flex justify-between">
                        <div>
                            <label class="font-bold font-headings" for="quantity">Antal </label>
                            <input class="p-1" type="number" id="quantity" name="quantity" v-model="quantity">
                        </div>


                        <!--Måttenhet-->
                        <div class="input">
                            <label class="font-bold font-headings" for="measure">Måttenhet </label><i
                                class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                            <!--Select med olika enheter-->
                            <select v-model="select"
                                class="border-solid border border-slate-400 shadow-md rounded bg-white p-1">7
                                <option value="">Enhet</option>
                                <option v-for="select in measures" :value="select.unit">
                                    {{ select.unit }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <!--Knapp för att lägga till-->
                <div>
                    <button class="p-3 rounded-md shadow-md" type="submit">Lägg till
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
            nameError: "",
            categoryError: "",
            categories: [],
            category_name: "",
            select: "",
            success: "",
            category_item: ""
        }
    },
    methods: {
        async addItem() {
            if (this.name && this.category_item && this.select && this.quantity != "") {
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
    max-width: 600px;
    width: 100%;
    margin: 1rem auto;
}

h2 {
    text-align: center;
    margin-top: 1rem;
}

.input {
    max-width: 500px;
    width: 100%;
    margin: 2rem auto;
    display: block;
}

input[type="text"],
select {
    width: 100%;
    border: 1px solid #5E64FF;
}

input[type="number"],
#measure {
    max-width: 200px;
    width: 100%;
    border: 1px solid #5E64FF;
}


form {
    max-width: 600px;
    width: 100%;
}

.flexcontainer {
    max-width: 400px;
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
    margin: auto;
    display: block;
    background-color: #121af6;
    color: white;
}
</style>