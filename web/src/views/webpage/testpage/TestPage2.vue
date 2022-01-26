<template>
  <div class="TestPage">
    <el-card>
      <div style="text-align: left">
        <h2 style="text-align: left">涩涩币交易系统</h2>
      </div>
      <el-divider/>
      <div>
        <div style="text-align: center">
          <el-form inline label-width="100px">
            <el-form-item label=用户名：>
              <el-input></el-input>
            </el-form-item>
            <el-form-item label=密码：>
              <el-input show-password></el-input>
            </el-form-item>
            <br>
            <el-button style="width: 100px" type="info" @click="login(loginForm)">登录</el-button>
          </el-form>
        </div>
      </div>
      <el-divider/>
      <div>
        <h3>您当前的涩涩币余额为：10 个</h3>
      </div>
      <br>
      <el-button style="width: 150px" type="primary" @click="dialogVisible = true">使用</el-button>
      <el-button style="width: 150px" type="success">赠送</el-button>
      <el-button style="width: 150px" type="info">充值</el-button>
      <div style="text-align: left">
        <h3>交易记录</h3>
      </div>
      <el-table :data="dateList">
        <el-table-column prop="user" label="记录"></el-table-column>
        <el-table-column prop="num" label="数量"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      title="使用"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
    <span>使用</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
  </div>



</template>

<script>


export default {
  name: 'TestPage',
  props: {
    name: String
  },
  data (){
    return {
      dialogVisible: false,

      MESSAGE_LIST: [
        {message: 'This is a message!'}
      ],
      getResp: 'no resp',
      dateList: [{
        user: 'XiaoBai',
        num: '1',
        time: '2022年1月17日02:12:12',
      },{
        user: 'XiaoBai',
        num: '1',
        time: '2022年1月17日02:12:12',
      },{
        user: 'XiaoBai',
        num: '1',
        time: '2022年1月17日02:12:12',
      },{
        user: 'XiaoBai',
        num: '1',
        time: '2022年1月17日02:12:12',
      },{
        user: 'XiaoBai',
        num: '1',
        time: '2022年1月17日02:12:12',
      },],
    }
  },
  methods: {
    add (){
      this.MESSAGE_LIST.push({ message: 'This is a message!' });
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
