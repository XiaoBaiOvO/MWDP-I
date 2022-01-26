<template>
  <el-card style="background-color: #0079ff;border-width: 5px;text-align: center;color: white">
<!--    <h1 style="text-align: center;line-height:50px;color: #FFFFFF">欢迎光临小白工作站</h1>-->
<!--    <el-divider/>-->
<!--    <h2 style="text-align: center;color: #FFFFFF">This is an index page.</h2>-->
<!--    <el-divider/>-->
<!--    <h3>检查登录信息（测试）</h3>-->
<!--    <h3>userName: {{$store.state.userInfo.userName}}</h3>-->
<!--    <h3>password: {{$store.state.userInfo.password}}</h3>-->
<!--    <h3>如果信息正确可以直接<br/>打开网盘自动登录</h3>-->
<!--    <el-divider/>-->
<!--    <div style="text-align: center" v-if="!($store.state.userInfo.userName !== '' && $store.state.userInfo.password !== '')">-->
<!--      <el-button icon="el-icon-s-help" type="success" @click="$router.push({name: 'Login'})">登录</el-button>-->
<!--      <el-button icon="el-icon-help" type="info" @click="$router.push({name: 'Register'})">注册</el-button>-->
<!--    </div>-->
<!--    <div style="text-align: center" v-if="$store.state.userInfo.userName !== '' && $store.state.userInfo.password !== ''">-->
<!--      <h3>您已登录！</h3>-->
<!--      <el-button icon="el-icon-help" style="margin-top: 20px" type="success" @click="$router.push({name: 'NetDisk'})">打开网盘</el-button>-->
<!--    </div>-->

    <div v-if="$store.state.userInfo.userName === ''">
      <h3>用户未登录</h3>
    </div>

    <div v-if="$store.state.userInfo.userName !== ''">
      <h3>用户已登录</h3><br><span>用户： {{ $store.state.userInfo.userName }}</span><br>
      <el-button icon="el-icon-help" style="margin-top: 20px" type="success" @click="$router.push({name: 'NetDisk'})">打开网盘</el-button>
    </div>

  </el-card>
</template>

<script>
export default {
  name: "Index",
  methods:{
    start(){
      console.log()
    }
  },
  created() {
    this.start()
  }
}
</script>

<style scoped>

</style>