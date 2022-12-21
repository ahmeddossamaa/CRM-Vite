import './bootstrap'

import { createApp, defineAsyncComponent } from "vue"
import router from "./router"

import App from "./views/App.vue"
import Loading from "./components/Loading.vue"
import Error from "./components/Error.vue"

const localComponent = defineAsyncComponent({
    loader: () => '...',
    loadingComponent: Loading,
    delay: 200,
    errorComponent: Error,
    timeout: 3000,
})

createApp(App).use(router).mount('#app')
