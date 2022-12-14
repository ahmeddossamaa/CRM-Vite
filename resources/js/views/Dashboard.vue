<template>
    <div class="top">
        test
    </div>
    <div class="bottom">
        <div class="left">
            <LeftBar/>
        </div>
        <div class="center"></div>
    </div>
<!--    <TopBar/>
    <Suspense>
        <template #default>
            <KeepAlive :include="['task']">
                <RouterView></RouterView>
            </KeepAlive>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
    <div>
        <input id="message" class="form-control w-25" v-model="message">
        <button class="btn btn-primary" @click="sendMessage">Send</button>
    </div>-->
</template>

<script>
import LeftBar from "../components/nav/LeftBar.vue"
import {ref} from "vue";
import {postRequest} from "../api";

const message = ref('');

const sendMessage = () => {
    let response = postRequest('sendMessage', {
        message: message.value,
    });
    console.log(response);
}

export default {
    name: 'Dashboard',
    components: {
        LeftBar,
    },
    setup(){
        return{
            message,
            sendMessage,
        }
    }
}
</script>

<style>
@media only screen and (max-width: 500px) {
    .left{
        display: none;
    }
}

.left{
    background: var(--goblin);
    border-right: 3px solid var(--goblin-light-green);
    height: 100vh;
    width: 15%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
