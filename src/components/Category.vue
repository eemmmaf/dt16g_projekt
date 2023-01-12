/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:15:53 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:20:15
 */

 <!--Kompontenten Category-->
<template>
    <div class="categorybox bg-main-color py-5 shadow-md">
        <div @click="$emit('deleteCategory')"><i
                class="fa-solid fa-trash-can text-complement-color cursor-pointer delete"></i></div>

        <!--Länkar till enskild kategori och skriver ut kategorins namn-->
        <router-link class="text-dark-color underline text-base"
            :to="{ name: 'singlecategory', params: { id: category._id } }">
            {{ category.category_name }}
        </router-link>
    </div>

</template>

<script>

export default {
    //Deklarerar emit för att ta bort en kategori
    emits: ['deleteCategory'],
    props: {
        category: Object
    }
}

</script>

<style scoped>
.categorybox {
    max-width: 200px;
    text-align: center;
    position: relative;
}

.delete {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
}
</style>