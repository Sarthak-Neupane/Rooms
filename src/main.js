import { createApp } from 'vue'
import router from './routes/routes'
import './index.css'
import App from './App.vue'

const app = createApp(App)
console.log(router.getRoutes())
app.use(router).mount("#app")
