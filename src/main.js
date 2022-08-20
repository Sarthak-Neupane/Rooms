import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/routes'
import './index.css'
import App from './App.vue'

import Firebase from './Firebase'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).mount("#app")
