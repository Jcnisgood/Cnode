import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state={
  topic:[]
}

var vm=new Vue({
  created(){
    //获取主题
    axios({
      url:'https://cnodejs.org/api/v1/topics',
      methods:'get',
      params:{
        page:1,
        limit:15
      }
    })
      .then(function (response) {
        state.topic=response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
})

export default new Vuex.Store({
  state
})