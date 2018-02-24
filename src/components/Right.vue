<template>
    <div class="right">
        <div class="login">
            <div class="titles">CNode：Node.js专业中文社区
                <button>通过GitHub登录</button>
            </div>
        </div>
    </div>
</template>

<script type=es6>
  /* eslint-disable */
  export default {
    name: 'temp',
    data() {
      return {
        userInfo: ''
      }
    }
  }
</script>

<style scoped>
    .right {
        width: 30%;
        height:700px;
        float: right;
    }
    .login{
        width: 93%;
        margin: 20px 60px 20px 5px;
        background: white;
        border-radius: 4px;
    }
    .titles{
        padding: 20px;
        text-align: center;
    }
    button{
        margin-top: 40px;
    }
</style>
