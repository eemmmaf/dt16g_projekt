<template>

    <tr v-bind:id="list._id" @click="handleClick" :style="{
    textDecoration: active ? 'line-through' : 'none',
    backgroundColor: active ? 'gainsboro' : 'white',
    color: active ? 'grey' : 'black'
}">
        <td class="py-5"> {{ list.name }} </td>
        <td>{{ list.quantity }} {{ list.measure }} </td>
        <td>{{ list.category }} </td>

        <!--Knapp för att ta bort-->
        <td @click="$emit('delete')"><i class="fa-xl fa-solid fa-trash cursor-pointer text-dark-color"></i></td>

        <Router-link class="text-dark-color" :to="{ name: 'edit', params: { id: list._id } }"><i
                class="fa-xl fa-solid fa-pen hover:text-medium-color"></i></Router-link>
    </tr>
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
        handleClick() {
            this.active = !this.active;
        }
    }
}


</script>

<style scoped>
h3 {
    color: gainsboro;

}

li {
    border-bottom: 1px solid black;
}
</style>