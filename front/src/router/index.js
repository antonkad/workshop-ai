import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/Start'
import Home from '../components/Home'
import Form from '../components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})