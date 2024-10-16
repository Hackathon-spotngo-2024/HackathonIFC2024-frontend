import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavbarComponent from './components/NavbarComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import CardSectionTitle from './components/CardSectionTitle.vue';
import CardComponent from './components/CardComponent.vue';
import RodapeComponent from './components/RodapeComponent.vue';
import LocacaoComponent from './components/ReservaComponent.vue'

const app = createApp(App)
app.component('NavbarComponent', NavbarComponent)
app.component('BannerComponent', BannerComponent)
app.component('CardSectionTitle', CardSectionTitle)
app.component('CardComponent', CardComponent)
app.component('RodapeComponent', RodapeComponent)
app.component('LocacaoComponent', LocacaoComponent)

app.use(router)
app.mount('#app')
