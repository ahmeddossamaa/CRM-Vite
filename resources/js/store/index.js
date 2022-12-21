import {createStore} from "vuex"

export const store = createStore({
    state: {
        loading: false,
        error: false,
    },
    mutations: {
        mutateLoading({state}){
            if (state.error){
                this.mutateError({state})
            }
            state.loading = !state.loading
        },
        mutateError({state}){
            if(state.loading){
                this.mutateLoading({state})
            }
            state.error = !state.error
        },
    }
})
