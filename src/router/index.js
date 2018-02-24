import Vue from 'vue'
import Router from 'vue-router'

import TopicList from '../components/TopicList'
import Right from '../components/Right'
import Article from '../components/Article'
import User from '../components/User'
import Sidebar from '../components/Sidebar.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'Home',
      components:{
        main:TopicList,
        sidebar:Right
      }
    },
    {
      path:'/topic/:id&:name',
      name:'Article',
      components:{
        main:Article,
        sidebar:Sidebar
      }
    },
    {
      path:'/user/:name',
      name:'User',
      components:{
        main:User,
        sidebar:Sidebar
      }
    }
  ]
})

Vue.filter('parseDate',function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
})
