<template>
<div class="card">
    <div class="card-header">{{ `${user.first_name} ${user.last_name}` }}</div>
    <div class="card-body">
        <div class="row">
            <div class="col-2">Email</div>
            <div class="col-4">{{ user.email }}</div>

            <div class="col-2">Role</div>
            <div class="col-4">{{ user.role_name }}</div>

            <div class="col-2">Created at</div>
            <div class="col-4">{{ user.created_at }}</div>
        </div>
    </div>
</div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from "vue";
import api from "../../api";

export default {
    props: {
        id: String,
    },
    setup(props){
        const user = ref({});

        onBeforeMount(async () =>{
            user.value = await api.getRequest(`users/${props.id}`);
            let date = new Date(user.value.created_at);
            user.value.created_at = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        });

        return {
            user,
        }
    }
}
</script>
