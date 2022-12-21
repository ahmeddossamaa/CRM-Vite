<template>
    <div class="c-wrapper">
        <LeftBar/>
        <div class="right">
<!--            <TopBar/>-->
            <div class="main-content">
                <h1 class="text-white">{{ title }}</h1>
<!--                <div class="main-content">-->
                    <RouterView/>
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import LeftBar from "../components/nav/LeftBar.vue"
import {inject, onUpdated, provide, ref} from "vue";
import {postRequest} from "../api";
import Right from "../components/Right.vue";
import TopBar from "../components/nav/TopBar.vue";

const message = ref('');

const sendMessage = () => {
    let response = postRequest('sendMessage', {
        message: message.value,
    });
}

const title = ref('');

export default {
    name: title.value,
    components: {
        TopBar,
        Right,
        LeftBar,
    },
    setup(){
        provide('title', title)

        title.value = 'Dashboard'
        /*onUpdated(() => {
            provide('title', title)
            title.value = 'Dashboard'
        })*/

        return{
            title,
            message,
            sendMessage,
        }
    }
}
</script>

<style>
.right{
    width: calc(100% - var(--left-bar-width));
    /*padding: 1.5rem;*/
}

.main-content{
    padding: 1.5rem;
}
</style>
