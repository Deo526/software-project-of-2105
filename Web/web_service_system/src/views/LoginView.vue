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
import {ElMessage, ElMessageBox} from "element-plus";

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

      this.loading = true; // 启用加载状态

      this.$axios.post('http://8.130.122.31:8000/user/login/', {
        username: this.form.username,
        password: this.form.password
      })
          .then(response => {
            if (response.status !== 200) {
              ElMessageBox.alert('登录失败，请检查用户名和密码', '提示', {
                confirmButtonText: '确定',
                type: 'error'
              });
              // 登录失败，跳转到登录页面
              this.$router.push("/login");
            } else {
              // 登录成功，跳转到首页
              this.$router.push("/home");
            }
          })
          .catch(error => {
            // 处理请求错误
            console.error('登录请求失败:', error);
            // 显示错误提示给用户
            ElMessage.error('登录失败，请稍后重试');
          })
          .finally(() => {
            this.loading = false; // 关闭加载状态
          });
    }
    }
}

</script>

<style>
.font {
  font-family: Arial, sans-serif;
}
</style>