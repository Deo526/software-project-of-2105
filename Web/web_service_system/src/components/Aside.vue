<template>
  <div style="font-weight: bold;
    font-family: Arial, sans-serif;
    color: white;"
  >
    <el-menu
        style="min-height: 94vh; font-weight: bold"
        :default-active="path"
        router
        background-color="#323744"
        text-color="#ffffff"
        active-text-color="#3888e4"
        :collapse="isCollapse"
        :collapse-transition=false
        :style="{ width: isCollapse ? '64px' : '220px' }"
    >
      <el-button
          @click="toggleCollapse"
          style="min-height: 4vh; border-radius: 0" color="#323744"
          :style="{ width: isCollapse ? '63px' : '219px' }"
      >
        <el-icon v-if="!isCollapse"><Fold /></el-icon>
        <el-icon v-if="isCollapse"><Expand /></el-icon>
      </el-button>
      <el-menu-item index="/home">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/search">
        <el-icon><Search /></el-icon>
        <span>搜索</span>
      </el-menu-item>
      <el-menu-item index="/timeline">
        <el-icon><Guide /></el-icon>
        <span>时间轴</span>
      </el-menu-item>
      <el-menu-item index="/knowledgeMap">
        <el-icon><Promotion /></el-icon>
        <span>知识图谱</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import { getCookie } from "@/utils/cookie";

import {Expand, Fold, Guide, House, Promotion,Search} from "@element-plus/icons-vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Aside",
  components: {Promotion, Guide, House, Fold, Expand,Search},
  data() {
    return {
      user: {},
      isCollapse: false,
      path: this.$route.path
    }
  },
  // created() {
  //   this.user = JSON.parse(getCookie("user"))
  // },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("getIsCollapse", this.isCollapse);
    }
  }
}
</script>