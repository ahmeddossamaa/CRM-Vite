<template>
    <div class="main">
        <Suspense>
            <router-view/>
        </Suspense>
    </div>
</template>

<script>
const channel = window.pusher.subscribe('my-channel');

channel.bind('new-message', function(data) {
    alert(data['message']);
});

export default {
    setup(){

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
