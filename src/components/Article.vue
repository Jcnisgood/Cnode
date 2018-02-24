<template>
    <div class="article" id="content">
        <div class="articles">
            <div class="art-header">
                <span class="title">{{article.title}}</span>
                <div class="changes">
                    <span>•发布于{{article.create_at | parseDate}}</span>
                    <span>•作者{{article.author.loginname}}</span>
                    <span>•{{article.visit_count}}次浏览</span>
                    <span>•来自{{tab}}</span>
                </div>
            </div>
            <div class="topic-content">
                <div v-html="article.content"></div>
            </div>
        </div>
        <div class="articles">
            <div v-for="(item,index) in article.replies" class="reply">
                <div class="reply-author">
                    <router-link :to="{name:'User',params:{name:item.author.loginname}}">
                        <img :src="item.author.avatar_url" :alt="item.author.loginname">
                        <span>{{item.author.loginname}}</span>
                    </router-link>
                    <span>{{index+1}} 楼</span>
                    <small>{{item.create_at | parseDate}}</small>
                    <span v-if="item.ups.length" class="fr">❤ {{item.ups.length}}</span>
                </div>
                <div  class="reply-content">
                    <div v-html="item.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type=es6>
  /* eslint-disable */
  import store from '../vuex/store'
  import axios from 'axios'
  export default {
    name: 'temp',
    data() {
      return {
        article:{
          author:{
            loginname:''
          }
        }
      }
    },
    computed:{
      tab(){
        var type=this.article.tab
        if(type == 'ask'){
          return '问答'
        }
        if(type == 'share'){
          return '分享';
        }
        if(type == 'job'){
          return '招聘';
        }
        if(type == 'good'){
          return '精华';
        }
      }
    },
    //获取文章
    created(){
      var m=this
      axios({
        url:`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
        method:'get',
      })
        .then(function (response) {
          m.article=response.data.data
        })
    }
  }
</script>

<style>
    @import "../../src/assets/markdown-github.css";
    .article {
        margin-top: 20px;
        width: 70%;
        float: left;
        margin-bottom: 20px;
    }
    .articles{
        width: 93%;
        margin: 20px 5px 20px 60px;
        background: white;
        border-radius: 4px;
    }
    .topic-content{
        border-top: 1px solid #e5e5e5;
        padding: 20px;
    }
    .art-header{
        font-size: 26px;
        padding: 20px;
    }
    .title{
        font-weight: bold;
    }
    .changes{
        font-size: small;
        color: #838383;
    }
    .changes span {
        padding: 0 5px 0 0;
    }
    .reply a:hover{
        text-decoration-line: none;
    }
    .reply-author img{
        width: 40px;
        height: 40px;
        position: relative;
        top:10px;
    }
    .fr{
        float: right;
        margin-right: 20px;
    }
    .reply{
        border-top: 1px solid #e5e5e5;
        padding: 10px 0 10px 10px;
    }
    .reply:nth-child(1){
        border-top: none;
    }
    .reply span:nth-child(1){
        font-weight: bold;
        color: black;
    }
    .reply-content{
        margin: 10px 20px 0 40px;
    }
</style>
