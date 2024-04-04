import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import components from './components/UI/index'
import './assets/scss/main.scss'


const app = createApp(App)
   .use(store)
      .use(router)

// ========================= UI-IMPORTS ============================== //

components.forEach(component => {
   return app.component(component.name, component)
})
      
// ================================================================== //

app.mount('#app')

