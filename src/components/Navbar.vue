<template>
    <nav class="bg-light-color shadow-md">
        <ul class="">
            <router-link to="/list">
            <li class="text-base font-headings font-bold text-dark-color">
                <i class="fa-regular fa-rectangle-list bg-main-color"></i> Min inkösplista
                <!--Skriv ut senaste här-->
            </li>
            </router-link>
            <!--Skapa ny lista-->
            <router-link to="/addlist">
                <li class="text-base font-headings font-bold text-dark-color">
                    <i class="fa-solid fa-circle-plus"></i> Skapa ny lista
                </li>
            </router-link>

            <li class="text-base font-headings font-bold text-dark-color">
                <i class="fa-solid fa-pen"></i> Kategorier
            </li>
        </ul>
    </nav>
</template>

<script>
</script>

<style scoped>
li {
    padding: 2rem;
}

nav {
    min-height: 100vh;
}
</style>