<template>
    <div class="user">
        <div class="Info">
            <router-link to="/"><span>主页 /</span></router-link>
            <div class="user-info">
                <img :src="userInfo.avatar_url" :alt="userInfo.loginname">
                <span>{{userInfo.loginname}}</span>
                <span>{{userInfo.score}} 积分</span>
                <span>注册时间{{userInfo.create_at | parseDate}}</span>
            </div>
        </div>
        <div class="Info">
            <span>最近创建的话题</span>
            <ul>
                <li v-for="item in userInfo.recent_topics" class="topList">
                    <router-link :to="{params:{id:item.author.loginname}}">
                        <img :src="item.author.avatar_url" :alt="item.author.loginname">
                    </router-link>
                    <router-link :to="{name:'Article',params:{id:item.id}}">{{item.title}}</router-link>
                    <small class="fr">{{item.last_reply_at | parseDate}}</small>
                </li>
            </ul>
        </div>
        <div class="Info">
            <span>最近参与的话题</span>
            <ul>
                <li v-for="item in userInfo.recent_replies" class="topList">
                    <router-link :to="{name:'User',params:{id:item.author.loginname}}">
                        <img :src="item.author.avatar_url" :alt="item.author.loginname">
                    </router-link>
                    <router-link :to="{name:'Article',params:{id:item.id}}">{{item.title}}</router-link>
                    <small class="fr">{{item.last_reply_at | parseDate}}</small>
                </li>
            </ul>
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
        userInfo: []
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
    .user {
        width: 70%;
        float: left;
    }
    .Info{
        width: 93%;
        margin: 20px 5px 20px 60px;
        background: white;
        border-radius: 4px;
    }
    .user-info{
        padding: 20px;
        color: #778087;
    }
    .Info span:first-child{
        display: block;
        border-bottom: 1px solid #e5e5e5;
        background: #f6f6f6;
        padding: 10px;
        color: #80bd01;
    }
    .fr{
        float: right;
    }
    .Info img{
        width: 50px;
        height: 50px;
    }
    .Info a{
        text-decoration-line: none;
    }
    .Info a:hover{
        text-decoration-line: underline;
    }
    .user-info span{
        display: block;
        margin: 10px;
    }
    li{
        list-style: none;
    }
    .topList{
        padding: 10px;
        border-top: 1px solid #f0f0f0;
        height: 50px;
        line-height: 50px;
    }
    .topList img{
        width: 40px;
        height: 40px;
        position: relative;
        top: 10px;
    }
    .topList a{
        padding: 0 10px 0 0;
    }
</style>
