<template>
<div class="d-flex justify-content-center align-items-center h-100 w-100">
    <form class="form" @submit.prevent="login">
        <legend>Login</legend>
        <label for="emailInput">
            <input type="email" name="email" class="form-control" id="emailInput" v-model="user.email" placeholder="Email"/>
        </label>
        <label for="passwordInput">
            <input type="password" name="password" class="form-control" id="passwordInput" v-model="user.password" placeholder="Password"/>
        </label>
        <button class="btn btn-outline-success">Submit</button>
    </form>
</div>
</template>

<script>
import {ref} from "vue";
import api from "../../api";
import cookies from 'vue-cookies';
import {useRouter} from "vue-router";

export default {
    setup(){
        const user = ref({
            email: '',
            password: '',
        });

        const router = useRouter();

        const login = async () => {
            let data = await api.postRequest('auth/login', user.value);
            cookies.set('auth', {
                user: data.user,
                authToken: data.authToken,
            });
            await router.push({name: 'home'});
        }

        return {
            user,
            login,
        }
    }
}
</script>

<style scoped>

</style>
