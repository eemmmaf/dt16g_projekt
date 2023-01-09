<template>
    <div class="flex">
      <div>

        <NavBar />

        </div>


    <div class="box shadow-lg relative top-5" v-if="item">
        <form class="mt-2 bg-light-color" @submit.prevent="updateItem(item)">
            <h2 class="text-center font-headings text-xl">Ändra</h2>

            <!--Flex-container-->
            <div class="flex justify-center mt-4 gap-x-3">

                <!--Produktens namn-->
                <div>
                    <label class="font-bold font-headings" for="name">Namn </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                    <input v-model="item.name" type="text" id="namn" name="namn"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">


                    <!--Kontroll om namn saknas och skriver ut felmeddelande-->
                    <div v-if="errorName">
                        <span class="text-complement-color font-bold">{{ errorName }}</span>
                    </div>
                </div>


                <!--Produktens antal-->

                <div>
                    <label class="font-bold font-headings" for="quantity">Antal</label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                    <input v-model="item.quantity" type="text" id="quantity" name="quantity"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">


                    <div v-if="errorQuantity">
                        <span class="text-complement-color font-bold">{{ errorQuantity }}</span>
                    </div>
                </div>

                <!--Select med kategorier-->
                <div>
                    <label class="font-bold font-headings" for="category">Kategori </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>

                    <select v-model="item.category" :value="item.category"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">
                        <option v-for="option in categories" :value="option.category_name">
                            {{ option.category_name }}
                        </option>
                    </select>
                </div>


                <!--Måttenhet-->
                <div class="input">
                    <label class="font-bold font-headings" for="measure">Måttenhet </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                    <!--Select med olika enheter-->
                    <select v-model="item.measure" :value="item.measure"
                        class="border-solid border border-slate-400 bg-white p-1">
                        <option v-for="select in measures" :value="select.unit">
                            {{ select.unit }}
                        </option>
                    </select>
                </div>

                <!--Knapp för att uppdatera-->
                <div>
                    <button class="p-3 rounded-md shadow-md bg-complement-color text-light-color cursor-pointer"
                        type="submit">Spara
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
    props: ['id'],
    components: {
        NavBar
    },
    data() {
        return {
            items: [],
            item: null,
            name: "",
            unit: "",
            measure: "",
            measures: [],
            quantity: "",
            categories: [],
            select: "",
            unit: "",
            category_name: "",
            errorName: "",
            errorQuantity: ""
        }
    },
    methods: {
        //Hämtar specifik produkt utifrån dess id och anropar getCategories
        async getById() {
            const resp = await fetch("http://localhost:3000/items/" + this.id, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            });
            const data = await resp.json();
            this.item = data;

            //Om parametern ändras(vid sökning främst) uppdateras innehållet på sidan 
            this.$watch(
                () => this.$route.params,
                async () => {
                    const resp = await fetch("http://localhost:3000/items/" + this.id, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    const data = await resp.json();
                    this.item = data;
                }
            )
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

        //Uppdaterar vara
        async updateItem(item) {
            if (item.name && item.quantity != "") {
                let updatedBody = {
                    _id: this.id,
                    name: item.name,
                    category: item.category,
                    measure: item.measure,
                    quantity: item.quantity
                };
                //Fetch-anrop med metoden PUT
                const resp = await fetch("http://localhost:3000/items/" + this.id, {
                    method: "PUT",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(updatedBody)
                });

                //Gör felmeddelanden tomma 
                this.errorName = "";
                this.errorQuantity = "";

                //Skickar användaren till listan om det läggs in
                this.$router.push({ path: '/' });
            } else {

                this.errorName = "";
                this.errorQuantity = "";

                //Kontroll om fält är tomma
                if (item.name == "") {
                    this.errorName = "Namn måste fyllas i";
                }
                if (!item.quantity) {
                    this.errorQuantity = "Antal måste fyllas i";
                }
            }
        }
    },
    mounted() {
        this.getById();
        this.getMeasures();
        this.getCategories();
    }
}


</script>

<style scoped>
button {
    margin-left: 0.5rem;
    margin-top: 1rem;
}

.box {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    min-height: 80vh;
}

form {
    padding: 1rem;
    min-height: 180px;
}
</style>