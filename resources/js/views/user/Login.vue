<template>
<div class="d-flex justify-content-center align-items-center vh-100 vw-100">
    <form class="form" @submit.prevent="login">
        <h5>Login</h5>
        <label for="emailInput" class="form-label">
            <input type="email" name="email" class="form-control" id="emailInput" v-model="user.email" placeholder="Email"/>
        </label>
        <label for="passwordInput" class="form-label">
            <input type="password" name="password" class="form-control" id="passwordInput" v-model="user.password" placeholder="Password"/>
        </label>
        <button class="btn btn-outline-success">Submit</button>
    </form>
</div>
</template>

<script>
import {ref} from "vue";
import {postRequest} from "../../api";
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
            let data = await postRequest('auth/login', user.value);
            cookies.set('auth', {
                user: data.user,
                authToken: data.authToken,
            });
            await router.push({name: 'dashboard'});
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
