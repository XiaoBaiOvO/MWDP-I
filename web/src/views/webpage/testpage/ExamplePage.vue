<template>
  <div>
    <el-carousel :interval="2500" type="card" height="400px" style="margin-top: 20px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium" style="text-align: center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col :span="8" style="margin-top: 50px">
        <el-skeleton :rows="50" animated />
      </el-col>
      <el-col :span="8">
        <div style="text-align: center;margin-top: 100px">
          <h1>Please Log in !</h1>
          <el-button type="primary" style="width: 100px;margin-left: 20px" @click="goToLoginPage">Log in</el-button>
          <el-divider style="margin-top: 50px"/>
          <el-skeleton :rows="50" animated />
        </div>
      </el-col>
      <el-col :span="8" style="margin-top: 50px">产品A：
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70" style="margin-top: 50px"></el-progress>产品B：
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" style="margin-top: 50px"></el-progress>产品C：
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" style="margin-top: 50px"></el-progress>产品D：
        <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" style="margin-top: 50px"></el-progress>
        <el-skeleton :rows="50" animated />
      </el-col>


    </el-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods:{
    goToLoginPage () {
      window.open('/login')
    }
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


</style>