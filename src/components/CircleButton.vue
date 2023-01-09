<template>
    <router-link to="/addcategory">
    <div class="circle shadow-md bg-complement-color">
        <span>+</span>
    </div>
</router-link>
</template>

<script>
</script>

<style scoped>
.circle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
}

span{
    position: absolute;
    left: 18px;
    font-size: 35px;
    color: white;
}
</style>