/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:16:10 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2023-01-12 02:20:34
 */


<!--Komponent för en cirkel-->
<template>
    <!--Länkar till vyn som lägger till en kategori-->
    <router-link to="/addcategory">
    <div class="circle shadow-md bg-complement-color">
        <span>+</span>
    </div>
</router-link>
</template>



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