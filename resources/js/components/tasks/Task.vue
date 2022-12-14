<template>
    <TransitionGroup name="list" tag="ul">
        <div class="uk-card uk-card-default uk-width-1-2@m mb-3" v-for="task in tasks.data" :key="task.id">
            <div class="uk-card-header bg-secondary text-white-50">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{ task.title }}</h3>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>{{ task.dsc }}</p>
            </div>
        </div>
    </TransitionGroup>
</template>

<script>
import {getRequest} from "../../api"
import {ref} from "vue"

const loadTask = async () => {
    return await getRequest('tasks')
}

export default {
    name: 'task',
    async setup(){
        const tasks = ref(await loadTask())

        return{
            tasks,
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
