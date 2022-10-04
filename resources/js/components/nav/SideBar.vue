<template>
    <nav>
        <router-link to="dashboard">Dashboard</router-link>
        <router-link to="users">Users</router-link>
        <router-link to="logout" class="logout">Logout</router-link>
    </nav>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style scoped>
nav{
    width: 100%;
    position: relative;
}

nav a{
    color: white;
    display: block;
    /*font-size: 1.2rem;*/
    font-weight: bold;
    padding: 10px 25px;
    text-decoration: none;
}

nav a:hover{
    border-left: 2px solid white;
    /*transition: 0.2s ease;*/
    background-color: rgba(0, 0, 0, 0.1);
}

.router-link-active{
    filter: fade(10);
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.1);
}

.logout{
    position: absolute;
    bottom: 0;
}
</style>
