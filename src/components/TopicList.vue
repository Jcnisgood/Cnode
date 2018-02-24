<template>
    <div class="topicList">
        <div v-if="loading" class="loading">
            Loading...
        </div>
        <div class="topic" v-else>
            <ul>
                <li v-for="(item,index) in topics" :key="item.key" class="list">
                    <router-link :to="{name:'User',params:{name:item.author.loginname}}">
                        <img :src="item.author.avatar_url" :alt="item.author.loginname">
                    </router-link>
                    <span>{{item.reply_count}} / <small>{{item.visit_count}}</small></span>
                    <router-link :to="{name:'Article',params:{id:item.id,name:item.author.loginname}}">{{item.title}}</router-link>
                    <span class="fr">{{item.last_reply_at | parseDate }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type=es6>
  /* eslint-disable */
  import {mapState} from  'vuex'

  import store from '../vuex/store'
  export default {
    name: 'temp',
    data() {
      return {
        loading:false
      }
    },
    computed:mapState({
      topics:'topic'
    }),
    beforeMount(){
    }
  }
</script>

<style scoped>
    .topicList {
        width: 70%;
        float: left;
    }
    .topic{
        width: 93%;
        margin: 20px 5px 20px 60px;
        background: white;
        border-radius: 4px;
    }
    .list{
        padding: 10px 0 10px 10px;
        border-bottom: 1px solid #f0f0f0;
        height: 40px;
        line-height: 40px;
    }
    .enters{
        background: #f0f0f0;
    }
    .list img{
        position: relative;
        top:5px;
        width: 30px;
        height: 30px;
    }
    .list a:hover{
        text-decoration-line: underline;
    }
    .list a:visited{
        color: gray;
    }
    .fr{
        float: right;
        padding-right: 10px;
        font-size: small;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration-line: none;
        color: black;
    }
</style>
