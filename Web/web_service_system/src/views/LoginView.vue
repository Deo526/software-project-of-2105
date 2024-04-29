<template>
  <div style="font-family: Arial, sans-serif; text-align: center">
    <div style="width: 100%; height: 94vh; overflow: hidden; background-color: aliceblue">
      <div style="width: 400px; margin: 150px auto;">
        <el-card>
          <div style="color: black; font-size: 25px; padding-bottom: 30px">
            欢迎使用海外文物知识系统
          </div>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input
                  prefix-icon="User"
                  v-model="form.username"
                  placeholder="请输入用户名"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                  prefix-icon="Lock"
                  v-model="form.password"
                  type="password"
                  autocomplete="off"
                  show-password
                  placeholder="请输入密码"
              />
            </el-form-item>
            <div style="text-align: center">
              <el-button type="primary" @click="login" style="width: 100%">登录</el-button>
            </div>
            <p class="tips">
              <router-link to="/Register">还没有账号？立即注册</router-link>

            </p>

          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// import request from "@/utils/request";
// import { getCookie, deleteCookie } from "@/utils/cookie";

import RegisterView from "@/views/RegisterView.vue";

export default {

    // 在组件被挂载之前
    beforeRouteEnter(to, from, next) {
      // 设置页面标题为路由的 meta 中定义的标题
      document.title = to.meta.title
      next()
    },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  computed: {
    RegisterView() {
      return RegisterView
    }
  },

  data() {
    return {
      user: {},
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      loading: false
    }
  },
  // created() {
  //   if(getCookie("user")) {
  //     deleteCookie("user")
  //   }
  // },

  methods: {
    login() {
      this.$router.push("/home")//执行完跳转页面，注册过
      // this.$refs.form.validate((valid) => {
      //   if(valid) {
      //     request.post("/user/login", this.form).then(res => {
      //       if(res.msg === "success") {
      //         this.$router.push("/home")
      //       } else {
      //         this.$message({
      //           type: "error",
      //           message: res.msg,
      //           customClass: "font"
      //         })
      //       }
      //     })
      //   } else {
      //     this.$message({
      //       type: "error",
      //       message: "请输入用户名和密码",
      //       customClass: "font"
      //     })
      //   }
      // })
    },
    Register(){
      this.$router.push("/register")//执行完跳转页面，注册过
    }
  }
}

</script>

<style>
.font {
  font-family: Arial, sans-serif;
}
</style>