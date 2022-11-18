<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center uk-padding uk-width-1-1@m uk-padding-remove-bottom uk-padding-remove-top uk-background-secondary uk-text-muted">
            <ul class="uk-navbar-nav w-100">
                <li class="">
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <a href="#">Parent</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li class="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <router-link to="/tasks">Tasks</router-link>
                </li>
                <li class="uk-align-right">
                    <router-link class="uk-text-danger" to="/logout">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "TopBar"
}
</script>

<style scoped>
/*nav{*/
/*    height: 10vh;*/
/*}*/
</style>
