<template>
    <nav>
        <div>
<!--            <hr>-->
            <NavButton to="home" name="Home"/>
            <NavButton to="tasks" name="Tasks"/>
            <div class="logout">
                <hr>
                <NavButton to="logout" name="Logout"></NavButton>
            </div>
        </div>
    </nav>
</template>

<script>
import NavButton from "../buttons/NavButton.vue"

export default {
    name: "SideBar",
    components: {NavButton},
    setup(){
        return{

        }
    }
}
</script>

<style>
nav{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 1rem 0;
}

.logout{
    width: 100%;
    position: absolute;
    bottom: 0;
}

.logout .nav-button-wrapper a{
    color: red;
}

.logout .nav-button-wrapper a:hover{
    background-color: var(--goblin-fade);
}
</style>
