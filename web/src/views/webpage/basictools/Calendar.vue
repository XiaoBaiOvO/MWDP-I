<template>
<el-card>
  <h1>日历</h1>
  <el-card style="margin: 20px;font-size: 18px">
  <el-calendar v-model="value">
  </el-calendar>
  </el-card>
</el-card>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      value: new Date(),
    }
  }
}
</script>

<style scoped>

h1 {
  margin-left: 20px
}

</style>