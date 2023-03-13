import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import routes from './routes'

const router = createRouter({
    // create a web history
    history: createWebHistory(),
    // inject our routes
    routes
})

// create vue app
createApp(App)
// inject router into app
.use(router)
// mount app to the DOM
.mount('#app')