<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data(){
    return {
      key: 'value',
    }
  },
  methods: {
    visit(){
      axios.post('/project/user/checkLoginStatus')
          .then((resp) => {
            console.log(resp.data);
            console.log(resp.data.userName);
            if (resp.data.loginStatus === 'Y') {
              this.$store.state.userInfo.userName = resp.data.userName;
              console.log("session check success!" + resp.data.userName);

            }
          })
    },
  },
  created() {
    this.visit();
  }
}
</script>
<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width: 8px;
  height: 8px;
  background-color: #F5F5F5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 0;
  background-color: #F5F5F5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

</style>
