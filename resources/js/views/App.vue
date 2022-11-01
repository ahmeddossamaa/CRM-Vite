<template>
    <router-view/>
</template>

<script>
import SideBar from "../components/nav/SideBar.vue";
import TopBar from "../components/nav/TopBar.vue";
import MainDiv from "../components/MainDiv.vue";
import Login from "./user/Login.vue";

export default {
    name: "App",
    components: {TopBar, SideBar, MainDiv, Login},
    setup(){

    }
}
</script>

<style scoped>

</style>
