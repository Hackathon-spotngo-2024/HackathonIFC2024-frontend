import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavbarComponent from './components/NavbarComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import LoginComponent from './components/LoginComponent.vue';

const app = createApp(App)
app.component('NavbarComponent', NavbarComponent)
app.component('BannerComponent', BannerComponent)
app.component('LoginComponent', LoginComponent)

app.use(router)

app.mount('#app')
