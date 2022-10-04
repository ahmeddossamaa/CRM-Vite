<template>
    <router-view/>
<!--    <login v-if="!auth.authToken"/>-->
<!--    <div class="row m-0" v-else>-->
<!--        <side-bar class="col-2"/>-->
<!--        <main-div class="col-10"/>-->
<!--    </div>-->
</template>

<script>
import SideBar from "../components/nav/SideBar.vue";
import TopBar from "../components/nav/TopBar.vue";
import MainDiv from "../components/MainDiv.vue";
import Login from "./user/Login.vue";
import cookies from "vue-cookies";
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";

export default {
    name: "App",
    components: {TopBar, SideBar, MainDiv, Login},
    setup(){

    }
}
</script>

<style scoped>

</style>
