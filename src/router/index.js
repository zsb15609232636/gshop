import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSiteGuide/MSiteGuide'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  //所有路由
  routes:[
    {
      path:'/',
      redirect:'/miste'
    },
    {
      path:'/miste',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
