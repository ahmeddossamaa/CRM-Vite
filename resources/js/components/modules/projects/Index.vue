<template>
    <div class="uk-child-width-1-4@s uk-grid-match" uk-grid>
<!--        <Suspense>-->
<!--            <template #default>-->
                <div v-for="project in projects">
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                        <h3 class="uk-card-title">{{ project.title }}</h3>
                        <p>{{ project.dsc }}</p>
                    </div>
                </div>
                <div v-if="!isNew">
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                        <h3 class="uk-card-title">Add new Project!</h3>
                        <p><button class="uk-button uk-button-primary" @click="isNew = !isNew">+</button></p>
                    </div>
                </div>
                <div v-else>
                    <div class="uk-card g-bg-goblin uk-card-body">
                        <input type="text" class="uk-input uk-form-width-small" v-model="project.title" placeholder="Title"/>
                        <p>
                            <input type="text" class="uk-input uk-form-width-medium" v-model="project.dsc" placeholder="Description"/>
                        </p>
                        <button class="uk-button uk-button-primary uk-button-small uk-width-1-3@s uk-float-right" @click="postProject">Save</button>
                    </div>
                </div>
<!--            </template>-->
<!--            <template #fallback>-->
<!--                <div>
                    <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                        <h3 class="uk-card-title">Title</h3>
                        <p>Description</p>
                    </div>
                </div>-->
<!--            </template>-->
<!--        </Suspense>-->
    </div>
</template>

<script>
import {getRequest, postRequest} from "../../../api"
import {inject, ref} from "vue"
import {getAuthId} from "../../../config/main";

const projects = ref([])
const isNew = ref(false)

const project = ref({
    user_id: getAuthId(),
    title: '',
    dsc: '',
})

const getProjects = async () => {
    return await getRequest('projects')
}

const postProject = async () => {
    let response = await postRequest('projects', project.value)
    if(response.message){
        // console.log(response.message)
    }else{
        projects.value.push(response)
    }
    isNew.value = !isNew.value
    return response;
}

export default {
    name: 'projects',
    async setup(){
        const title = inject('title')

        title.value = 'Projects'

        projects.value = (await getProjects())

        return{
            title,
            isNew,
            projects,
            project,
            postProject,
        }
    }
}
</script>

<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>
