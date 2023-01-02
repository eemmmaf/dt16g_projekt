<template>

    <div class="orange">
        <h3 class="text-orange-600">
            {{ category.category_name }}</h3>
    </div>


</template>

<script>

export default {
    props: {
        category: Object
    }
}

</script>

<style scoped>

</style>