<template>
  <div>
    <el-carousel :interval="2500" type="card" height="250px" style="margin-top: 20px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 style="margin-top: 100px;text-align: center">广告招商中。。。</h3>
      </el-carousel-item>
    </el-carousel>
    <el-card style="border-radius: 30px;margin-top: 20px;text-align: center;height: 800px" >
      <div style="height: 80px"/>
      <h1 style="text-align: center">欢迎回家，请先登录一下嗷~</h1>
      <el-form align="right">
        <span style="font-size: 15px">还没有账号？点击这里一键 </span>
        <el-button type="text" style="margin-right: 20px" @click="$router.push({name: 'Register'})">注册</el-button>
      </el-form>
      <el-divider/>
      <el-form :inline="true" label-width="100px">
        <el-form-item label="用户名：" style="margin-left: 20px">
          <el-input v-model="LOGIN_FORM_LIST.userName" style="width: 200px"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="密码：" style="margin-left: 20px">
          <el-input v-model="LOGIN_FORM_LIST.password" style="width: 200px" show-password></el-input>
        </el-form-item>
        <br/>
        <el-button type="primary" style="width: 100px;margin-left: 20px" @click="submitLogin">登录</el-button>
      </el-form>
    </el-card>

</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data () {
    return {
      dialogVisible: false,
      LOGIN_FORM_LIST: {
        userName:'',
        password: '',
      }
    }
  },
  methods: {
    submitLogin () {
      if (this.LOGIN_FORM_LIST.password === "" || this.LOGIN_FORM_LIST.userName === "" ) {
        console.log("Empty!");
        this.$message.error('请输入账号和密码!');
        return;
      }
      console.log("Post Reqire")
      axios.post('/project/user/login', this.LOGIN_FORM_LIST)
        .then((resp) => {
          console.log(resp.data)
          if (resp.data === 'Y') {
            this.$store.state.userInfo.userName = this.LOGIN_FORM_LIST.userName;
            this.$store.state.userInfo.password = this.LOGIN_FORM_LIST.password;
                console.log("Success!");
            this.$router.push({
              name: 'Index',
            });

          } else {
            console.log("Fail!");
            this.$message.error('账号或密码错误！');
          }
        }
      )
    },


  }
}
</script>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>