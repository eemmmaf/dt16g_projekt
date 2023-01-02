<template>
    <article class="bg-light-color p-3 shadow-lg">
        <div class="circle">
            <Circle />
        </div>
        <h2>Nya listor</h2>
        <ul>
            <li class="shadow-md">Julmiddag <i class="fa-solid fa-pen"></i></li>
            <li class="shadow-md">Julmiddag <i class="fa-solid fa-pen"></i></li>
            <li class="shadow-md">Julmiddag <i class="fa-solid fa-pen"></i></li>
            <li class="shadow-md">Julmiddag <i class="fa-solid fa-pen"></i></li>
            <li class="shadow-md">Julmiddag <i class="fa-solid fa-pen"></i></li>
            <li class="shadow-md">Julmiddag <i class="fa-solid fa-pen"></i></li>
        </ul>
    </article>


</template>

<script>
import Circle from './CircleButton.vue';

export default {
    components: {
        Circle
    }
}

</script>

<style scoped>
h2 {
    text-align: center;
}

li {
    background-color: #fcf9b2;
    margin-top: 2rem;
    padding: 1rem;
}

i {
    float: right;
}

article{
    position: relative;
}

.circle{
    position: absolute;
    right: 1rem;
    top: -1rem;
}
</style>