import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import NavbarComponent from './components/NavbarComponent.vue';
import RodapeComponent from './components/RodapeComponent.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)
const pinia = createPinia()

app.component('NavbarComponent', NavbarComponent)
app.component('RodapeComponent', RodapeComponent)

app.use(pinia)
app.use(router)

app.mount('#app')
