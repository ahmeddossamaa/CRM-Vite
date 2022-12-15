<template>
    <div class="c-wrapper-center c-vh-100">
    <!--    <form class="form" @submit.prevent="login">
        <h5>Login</h5>
        <label for="emailInput" class="form-label">
            <input type="email" name="email" class="form-control" id="emailInput" v-model="user.email" placeholder="Email"/>
        </label>
        <label for="passwordInput" class="form-label">
            <input type="password" name="password" class="form-control" id="passwordInput" v-model="user.password" placeholder="Password"/>
        </label>
        <button class="btn btn-outline-success">Submit</button>
    </form>-->
        <div class="c-w-50 c-p-3 c-wrapper-center">
            <form class="form c-border-radius-25" @submit.prevent="login">
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
        <div class="c-w-50 c-h-100">right</div>
    </div>
</template>

<script>
import {ref} from "vue";
import {postRequest} from "../api";
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
