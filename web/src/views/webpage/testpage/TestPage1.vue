<template>
  <div class="TestPage">
<!--    <h1>TestPage</h1>-->
<!--    <div style="background-color: #2c3e50;height: 50px;opacity: 0.5;position: fixed;width: 98.8%" ><h1 style="color: #ccc0b3">Test Top (In main)</h1></div>-->
    <h1 style="color: #FFFFFF">TestPage</h1>
    <el-card style="border-radius: 20px;margin-top: 20px">
    <li>UserName : {{ $store.state.userInfo.userName }}</li><el-button @click="setUserName">set userName</el-button>
      <div style="margin-top: 10px">
    <el-button type="success" icon="el-icon-plus" style="width: 120px" @click="add">Add</el-button>
    <el-button type="danger" icon="el-icon-delete" style="width: 120px" @click="clean">Clean</el-button>
      </div>
    <el-divider/>
    <div>
      <h3 v-for="item in MESSAGE_LIST" :key="item.id">{{ item.message }} </h3>
    </div>
    <div v-if="MESSAGE_LIST.length === 0">No Message</div>
    <el-divider/>
    总计 ：{{ MESSAGE_LIST.length }} 条
      <el-divider/>
      <el-button @click="getIPAddress">sent req</el-button>
      <br/>
      <span>{{getResp}}</span>
    </el-card>
    <el-empty style="height: 1500px"></el-empty>
    <el-empty style="height: 1500px"></el-empty>
    <el-empty style="height: 1500px"></el-empty>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'TestPage',
  props: {
    name: String
  },
  data (){
    return {
      MESSAGE_LIST: [
        {message: 'This is a message!'}
      ],
      getResp: 'no resp',
    }
  },
  methods: {
    add (){
      this.MESSAGE_LIST.push({ message: 'This is a message!' });
    },
    clean (){
      this.MESSAGE_LIST = [];
    },
    setUserName () {
      this.$store.state.userInfo.userName = 'xiaobai'
    },
    getIPAddress (ip) {
      ip = '61.173.73.5';
      let sentURL = 'https://api.map.baidu.com/location/ip?ak=Tco6gfz2hZFqtoXGIzoQavlz49dLCtOS&ip=' + ip + '&coor=bd09ll';
      axios.get(sentURL)
          .then((resp) => {
            console.log("end");
            this.getResp = resp;
          })
    },
  }
}
</script>

<style scoped>

.TestPage{
  text-align: center;
  line-height:1.7;
  /*font-size: 14px;*/
}

</style>
