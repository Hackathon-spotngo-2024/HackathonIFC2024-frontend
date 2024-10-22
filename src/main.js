import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import NavbarComponent from './components/NavbarComponent.vue'
import BannerComponent from './components/BannerComponent.vue'

import CardSectionTitle from './components/CardSectionTitle.vue'
import RodapeComponent from './components/RodapeComponent.vue'
import CardComponent from './components/CardComponent.vue';
import LocacaoComponent from './components/ReservaComponent.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('NavbarComponent', NavbarComponent)
app.component('BannerComponent', BannerComponent)

app.component('CardSectionTitle', CardSectionTitle)
app.component('CardComponent', CardComponent)
app.component('RodapeComponent', RodapeComponent)
app.component('LocacaoComponent', LocacaoComponent)

app.use(pinia)
app.use(router)

app.mount('#app')
