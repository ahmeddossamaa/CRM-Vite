<template>
    <div class="nav-button-wrapper">
        <RouterLink :to="{name: to}">{{ name }}</RouterLink>
    </div>
</template>

<script>
export default {
    name: "NavButton",
    props: {
        to: String,
        name: String,
    },
}
</script>

<style scoped>
.nav-button-wrapper{
    /*background-color: red;*/
    display: flex;
    padding: 0 0.8rem;
    margin-bottom: 0.5rem;
}

.nav-button-wrapper a{
    display: block;
    color: white;
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 10px;
    text-decoration: none;
}

.nav-button-wrapper a:hover{
    background-color: var(--goblin-light-green-fade);
    transition: 0.4s ease;
}

.router-link-exact-active{
    background-color: var(--goblin-light-green);
}
</style>
