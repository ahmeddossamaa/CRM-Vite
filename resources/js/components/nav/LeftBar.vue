<template>
    <div class="left">
        <nav>
            <div class="d-flex justify-content-center align-items-center my-3">
                <img src="../../../../public/logo.png" width="100" height="auto" alt="goblin">
            </div>
            <div>
                <hr>
                <NavButton to="home" name="Home"/>
                <NavButton to="projects" name="Projects"/>
                <NavButton to="test" name="Test"/>
                <div class="logout">
                    <hr>
                    <NavButton to="logout" name="Logout"></NavButton>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import NavButton from "../buttons/NavButton.vue"

export default {
    name: "SideBar",
    components: {NavButton},
    setup(){
        return{

        }
    },
}
</script>

<style>
@media only screen and (max-width: 500px) {
    .left{
        display: none;
    }
}

.left{
    background: var(--goblin);
    border-right: 3px solid var(--goblin-light-green);
    height: 100vh;
    width: var(--left-bar-width);
    position: static;
    /*position: absolute;
    top: 0;
    left: 0;*/
}

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
