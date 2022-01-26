<template>
  <el-footer height="30px" style="background-color: #ccc0b3">
<!--    PC端-->
    <el-row v-if="this.fullWidth > 560">
      <el-col :span="10" >
        <div style="text-align: left;margin-top: 7px">
          <span>Current time : {{nowDate}}</span>
        </div>
      </el-col>
      <el-col :span="14">
        <div style="text-align: right;margin-top: 7px">
          <span>Copyright © XiaoBai. All Rights Reserved. <strong>Version 1.0.0</strong></span>
        </div>
      </el-col>
    </el-row>
    <!--    PE端-->
    <el-row v-if="this.fullWidth <= 560 && this.fullWidth > 340">
      <el-col :span="18">
        <div style="text-align: left;margin-top: 7px">
          <span>Copyright © XiaoBai. All Rights Reserved.</span>
        </div>
      </el-col>
      <el-col v-if="this.fullWidth > 340" :span="6">
        <div style="text-align: right;margin-top: 7px">
          <strong>Version 1.0.0</strong>
        </div>
      </el-col>
    </el-row>
<!--    MINI端-->
    <el-row v-if="this.fullWidth <= 340">
      <el-col :span="24">
        <div style="text-align: center;margin-top: 7px">
          <span>Copyright © XiaoBai. All Rights Reserved.</span>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>

export default {
  name: "test",
  props: {
    name: String,
  },

  data() {
    return {
      nowDate: "", // 当前日期
      fullWidth: document.documentElement.clientWidth,
    };
  },
  methods: {
    getCurrentTime() {
      setInterval(this.formatDate, 1000);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    }
  },
  mounted() {
    this.getCurrentTime();
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>

<style scoped>

</style>