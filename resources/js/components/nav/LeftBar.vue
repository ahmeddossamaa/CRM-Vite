<template>
    <nav>
        <div class="sub-nav">
            <div class="app-name">CRM</div>
            <div class="mid">
                <hr class="m-1">
<!--                <router-link :to="{name: 'home'}"><span>Dashboard</span><i class="fas fa-home"></i></router-link>-->
                <router-link :to="{name: 'users'}"><span>Users</span><i class="fas fa-users"></i></router-link>
            </div>
            <div class="bottom">
                <hr class="m-1">
                <a class="logout-btn" href="" @click.prevent="logout"><span>Logout</span><i class="fas fa-sign-out-alt text-danger"></i></a>
            </div>
        </div>
    </nav>
</template>

<script>
import {logout} from "../../config/main";

export default {
    name: "SideBar",
    setup(){
        return{
            logout,
        }
    }
}
</script>

<style scoped>
nav{
    width: 100%;
    height: 100%;
    padding: 1rem;
    /*position: relative;*/
}

nav a{
    color: white;
    font-weight: bold;
    padding: 8px 20px;
    border-radius: 10%;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a:hover{
    /*border-left: 2px solid white;*/
    background-color: rgba(0, 0, 0, 0.1);
    transition: 0.2s;
}

.logout-btn:active, .router-link-active{
    filter: fade(10);
    background-color: rgba(0, 0, 0, 0.1);
}

.sub-nav{
    height: 100%;
    position: relative;
}

.bottom{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
