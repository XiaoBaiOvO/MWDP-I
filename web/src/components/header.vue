<template>
  <div>

    <el-menu :default-active="activeIndex" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-demo" mode="horizontal" style="border: 0" text-color="#fff" menu-trigger="click" @select="handleSelect">
      <el-menu-item index="Index">
        <img src="../assets/logo.png" style="opacity: .8;width:40px;margin-right: 20px" alt="">
        <strong style="color: #ffa47f;font-size: 18px;">小白云工具站</strong>
      </el-menu-item>
      <el-menu-item index="TestingPage">测试页面</el-menu-item>
      <el-submenu index="1">
        <template slot="title">功能菜单</template>
        <el-menu-item index="NetDisk">我的网盘</el-menu-item>
        <el-menu-item index="Home">Home</el-menu-item>

        <el-submenu index="1-1">
          <template slot="title">实用工具</template>
          <el-menu-item index="Calendar">日历</el-menu-item>
        </el-submenu>

        <el-menu-item index="TestPage">测试页面1</el-menu-item>
      </el-submenu>

      <el-menu-item disabled index="2">消息中心</el-menu-item>
      <el-menu-item disabled index="3">订单管理</el-menu-item>
      <div style="text-align: right;height: 60px;">
<!--        用户中心 下拉菜单-->
        <el-popover placement="bottom" width="400" trigger="click">
          <el-card v-if="$store.state.userInfo.userName === ''" style="text-align: center">
            <h3>您还未登录</h3><br>
              <el-button icon="el-icon-s-help" type="success" @click="$router.push({name: 'Login'})">登录</el-button>
              <el-button icon="el-icon-help" type="info" @click="$router.push({name: 'Register'})">注册</el-button>
          </el-card>
          <el-card v-if="$store.state.userInfo.userName !== ''">
            <h2>用户中心</h2>
            <div style="margin: 20px">
              <el-row>
                <el-col :span="8"><div style="margin-top: 10px"><el-avatar :size="60" :src="userPhoto"></el-avatar></div></el-col>
                <el-col :span="16" style="text-align: center;">
                  <el-form label-width="100px">
                    <el-form-item style="margin: 0" label="用户名：">XiaoBai</el-form-item>
                    <el-form-item style="margin: 0" label="账号类型：">高级会员</el-form-item>
                  </el-form>
                </el-col>
              </el-row>
            </div>
            <el-divider/>
            <el-form label-width="100px" label-position="left">
              <el-form-item style="margin: 0" label="会员等级：">V 9 ♔♔♔♔ [700000/1000000]</el-form-item>
              <el-form-item style="margin: 0" label="经验：">
                <el-progress :text-inside="true" :stroke-width="26" :percentage="70" style="margin-top: 7px;width: 200px">
                </el-progress>
              </el-form-item>
              <el-form-item style="margin: 0" label="账号余额：">
                <el-row>
                  <el-col :span="10">￥ 10,000,000</el-col>
                  <el-col :span="7"><el-button size="mini" @click="$router.push({name: '404'})">充值</el-button></el-col>
                  <el-col :span="7"><el-button size="mini" @click="$router.push({name: '404'})">提现</el-button></el-col>
                </el-row>
              </el-form-item>
            </el-form>
            <el-divider/>
            <el-row style="text-align: center">
              <el-col :span="8"><el-button icon="el-icon-magic-stick" type="success" size="small" style="width: 100px">成为会员</el-button></el-col>
              <el-col :span="8"><el-button icon="el-icon-setting" type="info" size="small" style="width: 100px">账号管理</el-button></el-col>
              <el-col :span="8"><el-button icon="el-icon-s-custom" type="danger" size="small" style="width: 100px" @click="logOut()">退出</el-button></el-col>
            </el-row>
          </el-card>
          <el-button slot="reference" type="text" icon="el-icon-user" style="text-align: center;margin-top: 7px;margin-right: 20px;font-size: 20px;color: #ccc0b3"></el-button>
        </el-popover>
        <el-button @click="drawer = true" type="text" icon="el-icon-menu" style="text-align: center;margin-top: 7px;margin-right: 20px;font-size: 20px;color: #ccc0b3"></el-button>
      </div>
    </el-menu>
<!--    更多功能 侧边栏-->
    <el-drawer :visible.sync="drawer" size="450px">
      <el-divider style="margin-top: -50px" content-position="left"><h2>操作中心</h2></el-divider>
      <el-card style="margin: 20px">
        <h3>快捷操作</h3>
        <el-form style="margin: 20px;text-align: center" label-width="100px">
          <el-form-item style="margin: 0" label="续费方式："><el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch></el-form-item>
          <el-form-item style="margin: 0" label="给小白打钱："><el-switch v-model="value2" active-text="自动" inactive-text="免密"></el-switch></el-form-item>
          <el-form-item style="margin: 0" label="开了没啥用："><el-switch v-model="value3" active-text="爱小白" inactive-text="爱小白"></el-switch></el-form-item>
          <el-form-item style="margin: 0" label="未知控制器："><el-slider v-model="value4"></el-slider></el-form-item>
        </el-form>
      </el-card>
      <el-card style="margin: 20px">
        <h3>消息中心</h3>
        <el-table>
        </el-table>
      </el-card>
      <el-card style="margin: 20px">
        <h3>用户反馈</h3>
        <el-form style="margin: 20px;text-align: center" label-width="100px">
          <el-form-item style="margin: 0;" label="使用评价："><el-rate v-model="value5" :colors="colors" show-text style="margin-top: 10px"></el-rate></el-form-item>
          <el-form-item style="margin: 0;" label="提出建议："><el-input style="margin-top: 10px" type="textarea" :rows="2" placeholder="请输入你的宝贵建议" v-model="textarea"></el-input></el-form-item>
          <el-form-item style="text-align: right"><el-button size="mini" icon="el-icon-message" type="primary" style="margin-top: 10px">提交</el-button></el-form-item>
        </el-form>
      </el-card>
      <el-card style="margin: 20px">
        <h3>快速浏览</h3>
        <el-empty style="height: 400px" description="这应该是一张图片，可是我没有素材"></el-empty>
        <el-empty style="height: 400px" description="这也是一张图片，emmmm"></el-empty>
        <el-empty style="height: 400px"></el-empty>
        <el-empty style="height: 400px"></el-empty>
        <el-empty style="height: 400px"></el-empty>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Headerpage",
  props: {
    name: String
  },
  data () {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      textarea: '',
      activeIndex: '/',
      drawer: false,
      userPhoto: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      LOGOUT_FORM_LIST: {
        userName: '',
      },
    }
  },
  methods: {
    handleSelect(index){
      console.log(index);
      this.$router.push({name: index});
    },
    logOut(){
      this.LOGOUT_FORM_LIST.userName = this.$store.state.userInfo.userName;
      axios.post('/project/user/logout', this.LOGOUT_FORM_LIST)
          .then(() => {
              this.$store.state.userInfo.userName = '';
              this.$store.state.userInfo.userId = '';
          }
          )
    }
  }
}
</script>

<style scoped>

</style>