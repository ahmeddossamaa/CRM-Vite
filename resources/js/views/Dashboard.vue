<template>
    <TopBar/>
    <Suspense>
        <template #default>
<!--            <KeepAlive :include="['task']">-->
                <RouterView></RouterView>
<!--            </KeepAlive>-->
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
import TopBar from "../components/nav/TopBar.vue";

export default {
    name: 'Dashboard',
    components: {
        TopBar,
    }
}
</script>

<style>
.router-link:active{
    color: green !important;
}
</style>
