<template>

  <div class="backPicture">

    <div class="site">
      <h1 style="position: absolute; top: 5%; left: 3%;color: #d3dce6;font-size: 50px;">欢迎进入海外文物知识系统</h1>
    </div>
    <el-card class="custom-card">
      <div style="color: black; font-size: 30px; padding-bottom: 30px;text-align: center;">
        欢迎登录
      </div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <div class="container">
            <el-icon><User /></el-icon>
            <el-input class="input" v-model="form.username" placeholder="请输入用户名" style="margin-left: 5px"/>
          </div>
        </el-form-item>
        <el-form-item prop="password" style="margin-top: 40px">
          <div class="container">
          <el-icon><Lock /></el-icon>
          <el-input
              v-model="form.password"
              type="password"
              autocomplete="off"
              show-password
              placeholder="请输入密码"
              style="margin-left: 5px;"
          />
          </div>
        </el-form-item>
        <div style="text-align: center;margin-top: 40px">
          <el-button type="primary" @click="login" style="width: 50%">登录</el-button>
        </div><br>
        <p class="tips" style="margin-left: 10%">
          <router-link to="/Register">还没有账号？立即注册</router-link>
        </p>
      </el-form>
    </el-card>

  </div>

</template>

<script>

import RegisterView from "@/views/RegisterView.vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {Lock, User} from "@element-plus/icons-vue";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {Lock, User},

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

.custom-card {
  position: fixed; /* 固定位置 */
  top: 28%; /* 距离顶部距离 */
  right: 38%; /* 距离右侧距离 */
  width: 25%; /* 卡片宽度 */
  height: 50%; /* 卡片高度 */
  background-color: rgba(255, 255, 255, 0.66); /* 设置背景颜色及透明度 */
  z-index: 9999; /* 设置z-index值，保证在最顶层 */
  overflow: auto; /* 设置溢出时滚动 */
  box-shadow: 10px 10px 11px rgba(255, 255, 255, 0.6); /* 添加白色阴影效果 */
  border-radius: 10px
}
.container {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  width: 80%;
  margin-left: 10%;
}

.icon {
  margin-right: 10px; /* 设置图标与输入框之间的间距 */
}
</style>