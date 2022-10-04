<template>
    <div class="row m-0">
        <div class="col-2 left">
            <div class="app-name">CRM</div>
            <side-bar class="side-bar"/>
        </div>
        <div class="col-8 center"><router-view/></div>
        <div class="col-2 right">right</div>
    </div>
</template>

<script>
import SideBar from "../components/nav/SideBar.vue";
export default {
    name: 'Dashboard',
    components: {SideBar},
}
</script>

<style>
.left, .right{
    min-height: 100vh;
    max-height: 100vh;
    background-color: #0d6efd;
}

.left{
    padding: 0;
    color: white;
    position: relative;
}

.side-bar{
    position: absolute;
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate();*/
}

.app-name{
    text-align: center;
    min-height: 10rem;
    line-height: 10rem;
    align-content: center;
    font-size: 4rem;
}
</style>
