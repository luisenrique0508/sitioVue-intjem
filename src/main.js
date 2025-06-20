import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Estilos responsive personalizados
import './assets/styles-responsive.css'

createApp(App).use(router).mount('#app')