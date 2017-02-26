import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import Auth from './packages/auth/Auth.js'

import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Auth)


// sentando o link da api
Vue.http.options.root = 'http://localhost:8000'
// Inserindo o token no cabeçalho
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Router.beforeEach(
  (to,from,next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/feed'
        })
      }else next()
    }
    else if(to.matched.some(record => record.meta.forAuth)){
      if(!Vue.auth.isAuthenticated()){
        next({
          path: '/login'
        })
      }else next()
    }else next()

  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
