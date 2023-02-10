import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from './Pinia.vue'

createApp(App).use(createPinia()).mount('#app')
