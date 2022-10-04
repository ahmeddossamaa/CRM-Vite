<template>
<form class="form" @submit.prevent="login">
    <label for="emailInput">
        Email:
        <input type="email" name="email" class="form-control" id="emailInput" v-model="user.email"/>
    </label>
    <label for="passwordInput">
        Password:
        <input type="password" name="password" class="form-control" id="passwordInput" v-model="user.password"/>
    </label>
    <button class="btn btn-outline-success">Submit</button>
</form>
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
            console.log("test");
            try {
                let data = await api.postRequest('auth/login', user.value);
                cookies.set('auth', {
                    user: data.user,
                    authToken: data.authToken,
                });
                await router.push({name: 'dashboard'});
            }catch (e){
                console.log(e);
            }
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
