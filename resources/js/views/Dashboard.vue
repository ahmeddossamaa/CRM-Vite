<template>
    <div class='container1'>
        <div class="left-bar"><side-bar/></div>
        <div class="scrollable-content">
            <center/>
        </div>
        <div class="right-bar">Right</div>
    </div>
</template>

<script>
import SideBar from "../components/nav/SideBar.vue";
import Users from "./Users.vue";
import Center from "./dashboard/Center.vue";
import TopBar from "../components/nav/TopBar.vue";

export default {
    name: 'Dashboard',
    components: {TopBar, Users, SideBar, Center},
}
</script>

<style>
body {
    margin:0;
    box-sizing: border-box;
    /*background-color:darkblue;*/
}
.container1 {
    --right-bar-width: 150px;
    --left-bar-width: 200px;
    color: white;
}
.left-bar {
    position:fixed;
    top: 0;
    width: var(--left-bar-width);
    height: 100vh;
    background-color: #006400FF;
}
.right-bar {
    position:fixed;
    top:0;
    right: 0;
    width: var(--right-bar-width);
    background-color:magenta;
}
.scrollable-content {
    margin-left: var(--left-bar-width);
    background-color: rgb(33, 33, 33);
    width: calc(100% - var(--left-bar-width) - var(--right-bar-width));
    /*height: calc(100vw - var(--topbar-height));*/
}
</style>
