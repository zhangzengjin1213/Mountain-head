import Vue from 'vue'
import Router from 'vue-router'
const index =()=>import('../components/index')
const home =()=>import('../components/home')
const list =()=>import('../components/list')
const poll = ()=>import('../components/poll')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/index'},
    {name:'index',path:'/index', component:index},
    {name:'home',path:'/home', component:home},
    {name:'list',path:'/list', component:list},
    {name:'poll',path:'/poll',component:poll}
  ]
})
