<template>
    <div>
        <ul class="list-unstyled">
            <li v-for="user in users"><router-link class="text-white" :to="`/users/${user.id}`">{{ user['id'] + ' ' + user['first_name'] + ' ' + user['last_name'] }}</router-link></li>
        </ul>
    </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import api from "../api";

const users = ref([]);

export default {
    setup(){
        onBeforeMount(async () => {
            users.value = await api.getRequest('users');
        });

        return {
            users,
        }
    }
}
</script>

<style scoped>

</style>
