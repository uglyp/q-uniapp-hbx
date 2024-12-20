import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import { routeInterceptor, requestInterceptor } from './interceptors'
import 'virtual:uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  return {
    app,
  }
}
