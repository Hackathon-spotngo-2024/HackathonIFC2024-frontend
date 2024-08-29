import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavbarComponent from './components/NavbarComponent.vue';
import BannerComponent from './components/BannerComponent.vue';

const app = createApp(App)
app.component('NavbarComponent', NavbarComponent)
app.component('BannerComponent', BannerComponent)

app.use(router)
app.mount('#app')
