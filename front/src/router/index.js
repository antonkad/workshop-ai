import Vue from 'vue'
import Router from 'vue-router'
import Start from '../components/Start'
import Home from '../components/Home'
import Form from '../components/Form'
import PageOne from '../components/PageOne'
import PageTwo from '../components/PageTwo'

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
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/page-two',
      name: 'PageTwo',
      component: PageTwo
    }
  ]
})