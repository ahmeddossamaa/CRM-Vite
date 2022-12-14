<template>
    <div class="uk-section uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
        <div class="uk-width-1-1">
            <div class="uk-container">
                <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                    <div class="uk-width-1-1@m">
                        <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                            <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
                            <form @submit.prevent="login">
                                <div class="uk-margin">
                                    <div class="uk-inline uk-width-1-1">
                                        <span class="uk-form-icon" uk-icon="icon: mail"></span>
                                        <input class="uk-input uk-form-large" type="text" v-model="user.email" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="uk-margin">
                                    <div class="uk-inline uk-width-1-1">
                                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                        <input class="uk-input uk-form-large" type="password" v-model="user.password" placeholder="Password"/>
                                    </div>
                                </div>
                                <div class="uk-margin">
                                    <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from "vue"
import {postRequest} from "../../api"
import cookies from 'vue-cookies'
import {useRouter} from "vue-router"

export default {
    setup(){
        const user = ref({
            email: '',
            password: '',
        })

        const router = useRouter()

        const login = async () => {
            let data = await postRequest('auth/login', user.value)
            cookies.set('auth', {
                user: data.user,
                authToken: data.authToken,
            })
            await router.push({name: 'home'})
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
