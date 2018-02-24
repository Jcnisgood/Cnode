<template>
    <div class="sidebar">
        <div class="info">
            <span>作者 <small>个人信息</small></span>
            <div class="author">
                <router-link :to="{name:'User',params:{id:userInfo.loginname}}">
                    <img :src="userInfo.avatar_url" alt="">
                    <span>{{userInfo.loginname}}</span>
                </router-link>
                <span>积分：{{userInfo.score}}</span>
            </div>
        </div>
    </div>
</template>

<script type=es6>
  /* eslint-disable */
  import axios from 'axios'
  export default {
    name: 'temp',
    data() {
      return {
        userInfo: ''
      }
    },
    created(){
      var m=this
      axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(function (response) {
          m.userInfo=response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
    .sidebar {
        width: 30%;
        float: right;
    }
    .info{
        margin: 20px 60px 20px 5px;
        background: white;
        border-radius: 4px;
    }
    a{
        text-decoration-line: none;
    }
    span:first-child{
        display: block;
        border-bottom: 1px solid #e5e5e5;
        background: #f6f6f6;
    }
    span{
        padding: 10px;
        display: block;
    }
    .info img{
        width: 60px;
        height: 60px;
    }
    .author{
        padding: 10px;
    }
</style>
