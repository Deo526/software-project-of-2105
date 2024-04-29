<template>
  <div style="font-family: Arial, sans-serif; text-align: center">
    <div style="width: 100%; height: 94vh; overflow: hidden; background-color: aliceblue">
      <div style="width: 400px; margin: 150px auto;">
        <el-card>
          <div style="color: black; font-size: 30px; padding-bottom: 30px">
            欢迎注册
          </div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input
                  prefix-icon="User"
                  v-model="form.username"
                  placeholder="请输入用户名"
              />
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                  prefix-icon="Lock"
                  v-model="form.email"
                  placeholder="请输入邮箱"
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
              />
            </el-form-item>

            <div style="text-align: center">
              <el-button type="primary" @click="register" style="width: 100%">立即注册</el-button>
            </div>
            <div style="text-align: center; padding-top: 10px">
              <el-button type="text" @click="goToLogin" style="width: 100%">返回登录</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
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
          { required: true, message: '请输入电话号码', trigger: 'blur' }
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
          // request.post("/user/register", this.form).then(res => {
          //   if(res.msg === "success") {
          //     this.$router.push("/login")
          //   }  else {
          //     this.$message({
          //       type: "error",
          //       message: res.msg
          //     })
          //   }
          // })
        }
      })
    },
    goToLogin(){
      this.$router.push("/login")
    }
  }
}
</script>
