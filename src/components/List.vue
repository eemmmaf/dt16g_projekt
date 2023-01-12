/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:16:35 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:23:19
 */

<!--Komponent som skriver ut varor i listan-->
<template>

<!--Artikeln ändrar style vid klick-->
    <article class="articles cursor-pointer" v-bind:id="list._id" @click="handleClick" :style="{
    textDecorationLine: active ? 'line-through' : 'none',
    backgroundColor: active ? 'gainsboro' : 'white',
    color: active ? 'grey' : 'black'
}">

<!--Skriver ut vara-->
        <div class="flex justify-between">
            <div>

                <div class="headingcategory text-sm bg-main-color">
                    <h3 class="text-dark-color">{{ list.category }}</h3>
                </div>
                <div class="flex">
                    <div>
                <h4 class="text-dark-color text-base mt-2">{{ list.name }} &nbsp;</h4></div>
                <div>
                <p class="text-sm mt-2 text-dark-color">{{ list.quantity }} {{ list.measure }}</p></div>
            </div>
            </div>



            <div>

                <!--Knapp för att ta bort-->
                <div class="flex">
                    <div class="mr-4">
                        <p @click="$emit('delete')"><i
                                class="fa-solid fa-trash-can fa-lg text-complement-color cursor-pointer"></i></p>
                    </div>

                    <div>

                        <Router-link class="text-dark-color" :to="{ name: 'edit', params: { id: list._id } }"><i
                                class="fa-solid fa-pencil fa-lg text-complement-color cursor-pointer"></i></Router-link>
                    </div>
                </div>
            </div>

        </div>
    </article>
</template>

<script>
import { onMounted } from 'vue';

export default {
    props: {
        list: Object
    },
    emits: ["delete"],
    data() {
        return {
            active: false
        }
    },
    methods: {
        //Metod för att byta style på article-elementet
        handleClick() {
            this.active = !this.active;
        }
    }
}


</script>

<style scoped>
article {
    border-bottom: 1px solid gray;
    padding: 0.5rem;
}

.headingcategory {
    padding-right: 2rem;
    padding-left: 0.5rem;
    width: 250px;
}
</style>