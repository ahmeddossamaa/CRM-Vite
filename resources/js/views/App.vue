<template>
    <div class="main">
        <Suspense>
            <template #default>
                <router-view/>
            </template>
            <template #fallback>
                <Loading/>
            </template>
<!--        <Error v-else-if="store.state['error']"/>-->
<!--        <router-view v-else/>-->
        </Suspense>
    </div>
</template>

<script>
import Loading from "../components/Loading.vue"
import Error from "../components/Error.vue"
// import {useStore} from "vuex"
// import {store} from "../store";

const channel = window.pusher.subscribe('my-channel');

channel.bind('new-message', function(data) {
    alert(data['message'])
});

export default {
    components: {
        Loading,
        Error,
    },

    setup(){
        // const store = useStore()

        return{
            // store
        }
    }
}
</script>

<style>
body {
    height: 100vh;
    /*position: relative;*/
    margin:0;
    box-sizing: border-box;
    background-color: var(--goblin-fade);
}
</style>
