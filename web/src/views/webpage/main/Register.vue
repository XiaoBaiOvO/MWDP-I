<template>
<div>
  <el-card>
    <el-card>
    <el-form :model="userForm" :rules="rules" ref="userForm" :inline="true" label-width="80px" style="text-align: center;">
      <el-form-item label="用户名：" prop="userName">
        <el-input v-model="userForm.userName" style="width: 200px"></el-input>
      </el-form-item><br/>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="userForm.password"></el-input>
      </el-form-item><br/>
      <el-form-item label="昵称：" prop="userId">
        <el-input v-model="userForm.userId"></el-input>
      </el-form-item><br/>
      <el-form-item label="小白会叫你什么：" prop="referrer">
        <el-input v-model="userForm.referrer"></el-input>
      </el-form-item><br/>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </el-card>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data(){
    return {
      userForm:{
        userName: '',
        userId: '',
        password: '',
        referrer: '',
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // { min: 5, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        userId: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submit () {
      console.log("提交中");
      axios.post('/project/user/register', this.userForm)
        .then((resp) => {
          console.log(resp.data)
          if (resp.data === 'Y') {
            console.log("Success!");
            this.$message.success('注册成功');
            this.$router.push({
              name: 'Index',
            });
          } else {
            console.log("Fail!");
            this.$message.error(resp.data);
          }
        })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('不要填错，因为提交了无法修改（还没开发修改的功能哈哈哈，下次一定）');
          this.submit();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    },
}
</script>

<style scoped>

</style>