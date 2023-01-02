<template>

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
                </div>


                <!--Produktens antal-->

                <div>
                    <label class="font-bold font-headings" for="quantity">Antal</label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                    <input v-model="item.quantity" type="text" id="quantity" name="quantity"
                        class="border-solid border border-slate-400 shadow-sm w-full bg-white p-1">
                </div>

                <!--Select med kategorier-->
                <div>
                    <label class="font-bold font-headings" for="category">Kategori </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>

                    <select v-model="item.category_item"
                        class="border-solid border border-slate-400 bg-white p-1">7
                        <option v-for="category_item in categories" :value="item.category_item">
                            {{ category_item.category_name }}
                        </option>
                    </select>
                </div>





                <!--Måttenhet-->
                <div class="input">
                    <label class="font-bold font-headings" for="measure">Måttenhet </label><i
                        class="fa-solid fa-pencil fa-2xs text-medium-color"></i><br>
                    <!--Select med olika enheter-->
                    <select v-model="item.measure" :value="item.select"
                        class="border-solid border border-slate-400 bg-white p-1">
                        <option v-for="select in measures" :value="select.unit">
                            {{ select.unit }}
                        </option>
                    </select>
                </div>

                <!--Knapp för att uppdatera-->
                <div>
                    <button class="p-3 rounded-md shadow-md bg-complement-color text-light-color cursor-pointer" type="submit">Spara
                    </button>
                </div>
            </div>
        </form>



    </div>



</template>


<script>

export default {
    props: ['id'],
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
            category_item: ""
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
            console.log(this.item);


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
            if (item.name != "") {
                let updatedBody = {
                    _id: this.id,
                    name: item.name,
                    category: item.category_item,
                    measure: item.select,
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
                this.$router.push({path: '/list'});
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
button{
margin-left: 0.5rem;
margin-top: 1rem;
}

.box{
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    min-height: 80vh;
}

form{
    padding: 1rem;
}
</style>