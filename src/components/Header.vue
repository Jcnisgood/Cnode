<template>
    <div class="header">
        <router-link :to="{name:'Home'}">
            <img src="../assets/cnodejs.svg" alt="">
        </router-link>
        <span>关于</span>
    </div>
</template>

<script type=es6>
  /* eslint-disable */
  export default {
    name: 'temp',
    data() {
      return {
        msg: 'yeah'
      }
    }
  }
</script>

<style scoped>
    .header {
        height: 50px;
        background: #444;
    }
    img{
        margin: 7px 0 0 70px;
        width: 120px;
        height: 34px;
    }
    span{
        margin: 15px 70px 0 0;
        float: right;
        color: white;
    }
</style>
