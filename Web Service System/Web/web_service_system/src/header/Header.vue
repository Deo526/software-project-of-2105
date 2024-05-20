<template>
  <div>
    <!-- 添加一个容器包裹导航栏 -->
    <div class="navbar-wrapper px-6">
      <el-menu mode="horizontal" :default-active="activeIndex" @select="handle" router style="height:70px;display: flex; justify-content: space-between; align-items: center ">
        <div class="flex flex-row">
          <el-icon style="font-size: 65px;"><Management /></el-icon>
          <el-text style="font-weight: 550; font-size: 35px; color: black;">
            海外文物知识系统
          </el-text>
        </div>
        <div class="flex felx-row">
          <el-menu-item index="/home" style="font-weight: 400; font-size: 20px; color: black;">首页</el-menu-item>
          <el-menu-item index="/search" style="font-weight: 400; font-size: 20px; color: black;">搜索</el-menu-item>
          <el-menu-item index="/timeline" style="font-weight: 400; font-size: 20px; color: black;">时间轴</el-menu-item>
          <el-menu-item index="/knowledgeMap" style="font-weight: 400; font-size: 20px; color: black;">知识图谱</el-menu-item>
        </div>
        <el-button link @click="logout" class="text-lg">退出登录</el-button>
      </el-menu>
    </div>
    <!-- 添加一个空的 div 占位，防止内容被导航栏遮挡 -->
    <div style="height: 70px;"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import {Management} from "@element-plus/icons-vue";

export default {
  components: {Management},
  data() {
    return {
      activeIndex: "/"
    }
  },
  methods: {
    handle(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
    clearUserSession() {
      // 清除登录相关信息，例如 Token
      localStorage.removeItem("authToken");
      this.$store.commit("setUser", null); // 重置 Vuex 状态
    },
    logout() {
      this.clearUserSession();
      this.$router.replace("/firstPage");
    },

  }
}
</script>

<style>
/* 添加样式，使导航栏固定在顶部 */
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保导航栏在最上层 */
  background-color: white; /* 可根据需要设置背景色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 可选：添加阴影效果 */
}

/* 添加样式，使内容不被导航栏遮挡 */
.router-view {
  padding-top: 70px; /* 与导航栏高度相同 */
}
</style>
