<template>
    <router-link to="/addlist">
    <div class="circle shadow-md">
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
    background-color: #5E64FF;
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