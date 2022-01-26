<template>
		<div>
				<el-card>
						<h2>NetDisk</h2>
						<el-divider/>
						<div v-if="this.$store.state.userInfo.userName != ''" style="text-align: center">
								<el-form inline label-width="100px">
										<el-form-item label=用户名：>
												<el-input v-model="loginForm.userName"></el-input>
										</el-form-item>
										<el-form-item label=密码：>
												<el-input v-model="loginForm.password" show-password></el-input>
										</el-form-item>
										<br>
										<el-button style="width: 100px" type="info" @click="login(loginForm)">登录</el-button>
								</el-form>
						</div>
						<div v-if="isLogin" style="text-align: center">
								<el-upload ref="upload" :auto-upload="false" :data="submitForm" :file-list="uploadForm" :on-preview="handlePreview" :on-remove="handleRemove" action="/project/netDisk/netDiskUpload" class="upload-demo">
										<el-button slot="trigger" size="small" type="primary">
												选取文件
										</el-button>
										<el-button size="small" style="margin-left: 10px;" type="success" @click="uploadFile">
												上传到服务器
										</el-button>
								</el-upload>
<!--								<divider/>-->
<!--								<div>-->
<!--										<div v-if="!isNewFolder">-->
<!--												<el-button style="width: 200px" @click="isNewFolder = true">新建文件夹</el-button>-->
<!--										</div>-->
<!--										<div v-if="isNewFolder">-->
<!--														<el-input v-model="operationForm.folderName" style="width: 130px"></el-input>-->
<!--														<el-button @click="isNewFolder = false;createFolder()">确定</el-button>-->
<!--										</div>-->
<!--								</div>-->
						</div>
						<el-divider/>

						<el-card>
								<el-form inline style="width: 100%">
										<el-form-item label="当前目录：" style="margin-left: 20px">
												<span><strong>{{ queryForm.userName }}</strong>{{ queryForm.path }}</span>
										</el-form-item>
                  <el-form-item>
                    <el-button type="text" icon="el-icon-refresh" style="color: black" @click="queryList(queryForm.path)"/>
                  </el-form-item>
                    <el-form-item style="margin-right: 10px">
                      <div v-if="!isNewFolder">
                        <el-button style="width: 130px" @click="isNewFolder = true">新建文件夹</el-button>
                      </div>
                      <div v-if="isNewFolder">
                        <el-input v-model="operationForm.folderName" style="width: 130px"></el-input>
                        <el-button @click="isNewFolder = false;createFolder()">确定</el-button>
                      </div>
                    </el-form-item>
								</el-form>

								<el-table :data="dateList">
										<el-table-column label="文件名">
												<template slot-scope="scope">
														<el-button v-if="scope.row.fileType === 'folder'" icon="el-icon-folder" type="text" @click="openFolder(scope.row.filePath)">{{ scope.row.fileName }}</el-button>
														<el-button v-if="scope.row.fileType === 'file'" style="margin-left: 19px" type="text" @click="downloadFile(scope.row.fileName, scope.row.filePath)">{{ scope.row.fileName }}</el-button>
												</template>
										</el-table-column>
										<el-table-column label="大小" prop="fileSize" style="margin-right: 20px"/>
										<el-table-column label="path" prop="filePath"/>
								</el-table>

						</el-card>
<!--						&lt;!&ndash;      <div style="height: 200px"></div>&ndash;&gt;-->
<!--						<el-divider/>-->
						<el-card>
								<span>验证返回数据</span><br><br>
								<span>PATH: {{queryForm.path}}</span><br/>
								<span>RESP: {{ resp }}</span>
						</el-card>
						<el-divider/>
				</el-card>
		</div>
</template>

<script>
import axios from "axios";

export default {
		name: 'NetDisk',
		props: {
				name: String,
				model: String,
		},
		data() {
				return {
						submitForm: {
								userName: '',
								path: '',
								operationType: '',
								fileName: '',
								folderName: ''
						},
						dateList: [{
								fileType: '',
								fileName: '',
								fileSize: '',
								filePath: ''
						}],
						loginForm: {
								userName: '',
								password: ''
						},
						queryForm: {
								operationType: 'query',
								path: ''
						},
						operationForm: {
								path: '',
								operationType: '',
								fileName: '',
								folderName: '',
						},
						uploadForm: [],
						isLogin: false,
						isNewFolder: false,
						resp: ''
				}
		},
		methods: {
				// checkLogin() {
        //   this.loginForm.userName = this.$store.state.userInfo.userName;
				// 		if (this.loginForm.userName !== "") {
				// 				this.isLogin = true;
				// 				this.queryList("\\");
				// 		} else {
				// 				console.log("你还未登录")
				// 		}
				// },


				login(loginForm) {
						if (loginForm.userName === "" || loginForm.password === "") {
								console.log("Empty!");
								this.$message.error("请输入账号和密码!");
								return;
						}
						axios.post('/project/user/login', loginForm)
								.then((resp) => {
										// 测试
										console.log(resp)
										this.resp = resp.data;
										if (resp.data === "Y") {
												console.log("登录成功");
												this.$store.state.userInfo.userName = this.loginForm.userName;
												this.$store.state.userInfo.password = this.loginForm.password;
												this.isLogin = true;
												this.queryList("\\");
										} else {
												console.log("登录失败!");
												this.$message.error("账号或密码错误！");
										}
								})
				},
				queryList(path) {
						this.queryForm.path = path;
						this.submitForm = {};
						this.submitForm = this.queryForm;
						this.submitForm.userName = this.$store.state.userInfo.userName;
						console.log("提交queryForm => " + this.submitForm);
						axios.post('/project/netDisk/netDiskOperation', this.submitForm)
								.then((resp) => {
										// 测试用
										this.resp = resp.data;
										console.log(this.resp);
										this.dateList = resp.data.result;
								})
				},
				createFolder() {
						console.log("creat");
						this.operationForm.operationType = 'createFolder';
						this.operationForm.path = this.queryForm.path;
						this.submitForm = {};
						this.submitForm = this.operationForm;
						this.submitForm.userName = this.$store.state.userInfo.userName;
						console.log("提交createFolder => " + this.submitForm);
						axios.post('/project/netDisk/netDiskOperation', this.submitForm)
								.then((resp) => {
										// 测试用
										this.resp = resp.data;
										console.log(this.resp);
										this.queryList(this.queryForm.path);
								})
				},
				uploadFile () {
						this.$refs.upload.submit();
						this.uploadForm = [];
						this.queryList(this.queryForm.path);
				},
				downloadFile (fileName, filePath) {
						console.log('下载文件：' + filePath);
						this.operationForm.operationType = 'downloadFile';
						this.operationForm.path = filePath;
						this.operationForm.fileName = fileName;
						this.submitForm = {};
						this.submitForm = this.operationForm;
						this.submitForm.userName = this.$store.state.userInfo.userName;
						console.log("提交queryForm => " + this.submitForm);
						axios.post('/project/netDisk/netDiskOperation', this.submitForm)
								.then((resp) => {
										// 测试用
										this.resp = resp.data;
										console.log(this.resp);
										window.open(resp.data.url)
								})
				},
				// deleteFile (path,fileName) {
				//
				// },
				openFolder(filePath) {
						console.log('打开文件夹：' + filePath);
								this.queryList(filePath);
				},
				// upload附加功能
				handleRemove() {
						console.log("点击删除，移除文件");
				},
				handlePreview() {
						console.log("点击文件，打开预览");
				}
		},
		created() {
				this.checkLogin()
		}
}
</script>

<style scoped>

</style>
