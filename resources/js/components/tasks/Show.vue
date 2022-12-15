<template>
    <div>{{ id }}</div>
</template>

<script>
export default {
    name: "Show",
    props: {
        id: String,
    },
    setup(props){
        return{
            id: props.id,
        }
    }
}
</script>

<style scoped>

</style>
