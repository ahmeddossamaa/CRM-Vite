<template>
<div class="custom-col"></div>
</template>

<script setup>
export default {
    props: {
        l: Number,
    },
    setup(props){
        console.log(props.l);
    }
}
</script>

<style scoped>
.custom-col{

}
</style>
