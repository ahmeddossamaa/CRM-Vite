<template>
<div class="right">test</div>
</template>

<script>
import {ref} from "vue"

export default {
    name: "Center",
    setup(){
        const numbers = ref([])

        for (let i = 0; i < 100; i++) {
            numbers.value[i] = i
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
.right{
    width: calc(100% - var(--left-bar-width));
}
</style>
