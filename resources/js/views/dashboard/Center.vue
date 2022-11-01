<template>
<ul>
<!--    <router-view/>-->
    <li v-for="(val, key) in numbers">{{ key }}: {{ val }}</li>
</ul>
</template>

<script>
import {ref} from "vue";

export default {
    name: "Center",
    setup(){
        const numbers = ref([]);

        for (let i = 0; i < 100; i++) {
            numbers.value[i] = i;
        }

        return{
            user: {
                name: 'ahmed',
                age: 20,
            },
            numbers: numbers,
        }
    }
}
</script>

<style scoped>

</style>
