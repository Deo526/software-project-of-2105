<template>
  <div class="backPicture">

        <el-card class="custom-card1">
          <div style="color: black; font-size: 30px; padding-bottom: 30px;text-align: center;">
            欢迎注册
          </div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input
                  prefix-icon="User"
                  v-model="form.username"
                  placeholder="请输入用户名"
                  style="width: 80%;margin-left: 10%"

              />
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                  prefix-icon="Lock"
                  v-model="form.email"
                  placeholder="请输入邮箱"
                  style="width: 80%;margin-left: 10%"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                  prefix-icon="Lock"
                  type="password"
                  v-model="form.password"
                  autocomplete="off"
                  show-password
                  placeholder="请输入密码"
                  style="width: 80%;margin-left: 10%"
              />
            </el-form-item>
            <el-form-item prop="confirm">
              <el-input
                  prefix-icon="Lock"
                  type="password"
                  v-model="form.confirm"
                  autocomplete="off"
                  show-password
                  placeholder="请再次输入密码"
                  style="width: 80%;margin-left: 10%"
              />
            </el-form-item>

            <div style="text-align: center">
              <el-button type="primary" @click="register" style="width: 50%;margin-top: 7%">立即注册</el-button>
            </div>
            <div style="text-align: center; padding-top: 10px">
              <el-button type="text" @click="goToLogin" style="width: 50%">返回登录</el-button>
            </div>
          </el-form>
        </el-card>

  </div>
</template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
       email: [
          { required: true, message: '请输入邮件', trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'}
        ],
        confirm: [
          { required: true, message: '请输入确认密码', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    register() {
      this.$refs['form'].validate((valid) => {
        if(valid) {
          if(this.form.password !== this.form.confirm) {
            this.$message({
              type: "error",
              message: "两次密码输入不一致！"
            })
            return;
          }

          this.loading = true; // 启用加载状态
          // 发送注册请求
          this.$axios.post('http://8.130.122.31:8000/user/register/', {
            username: this.form.username,
            password: this.form.password,
            email: this.form.email,
            confirm: this.form.confirm
          })
              .then(response => {
                console.log(response);
                if (response.status === 201) {
                  // 注册成功
                  this.$message({
                    type: 'success',
                    message: '注册成功，请返回登录界面登录！'
                  });
                  // 可以跳转到登录页面
                  this.$router.push("/login");
                }
              })
              .catch(error => {
                console.error(error); // 记录完整的错误信息
                if (error.message.includes("Username already exists")) {
                  // 用户名已存在
                  this.$message.error('Username already exists.');
                } else if (error.message.includes("Email already exists")) {
                  // 电子邮件已存在
                  this.$message.error('Email already exists.');
                } else {
                  // 其他错误
                  this.$message.error('Registration failed. Please try again later.');
                }
              })
              .finally(() => {
                this.loading = false; // 关闭加载状态
              });
        }
      });
    },

    goToLogin(){
      this.$router.push("/login")
    }
  }
}
</script>
<style>
.backPicture{
  background-image: url('../assets/image/img.png');
  background-size: cover; /* 调整背景图片大小以覆盖整个元素 */
  background-position: center; /* 将背景图片放置在元素中心 */
  height: 100vh; /* 设置元素高度为视窗高度 */
  display: flex;
  justify-content: center; /* 在水平方向上居中内容 */
  align-items: center; /* 在垂直方向上居中内容 */
  font-family: Arial, sans-serif;

}

.custom-card1 {
  position: fixed; /* 固定位置 */
  top: 24%; /* 距离顶部距离 */
  right: 38%; /* 距离右侧距离 */
  width: 25%; /* 卡片宽度 */
  height: 55%; /* 卡片高度 */
  background-color: rgba(255, 255, 255, 0.66); /* 设置背景颜色及透明度 */
  z-index: 9999; /* 设置z-index值，保证在最顶层 */
  overflow: auto; /* 设置溢出时滚动 */
  border-radius: 10px
}

</style>
