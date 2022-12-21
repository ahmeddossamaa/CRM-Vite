<template>
    <nav>
        <div class="center">
            <span>p</span>
        </div>
    </nav>
</template>

<script>
export default {
    name: "TopBar"
}
</script>

<style scoped>
nav{
    width: 100%;
    color: white;
    padding: .5rem;
    display: flex;
    justify-content: end;
    align-items: center;
}

nav .center{
    /*padding: 1.5rem;*/
    border-bottom: 3px solid var(--goblin-base-green);
}
</style>
