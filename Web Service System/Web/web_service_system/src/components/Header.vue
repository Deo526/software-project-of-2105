<template>
  <div style="
        display: flex;
        flex-direction: row;
        background-color: white;
        font-family: Arial, sans-serif;
        height: 70px
      ">
    <div style="padding-top: 15px;margin-left: 5%">
      <el-icon style="font-size: 40px"><Management /></el-icon>
    </div>
    <div style="padding-top: 10px;margin-left: 0.2%">
      <el-text style="font-weight: 550; font-size: 35px; color: black;">
        海外文物知识系统
      </el-text>
    </div>
    <el-button @click="toHome" link style="padding-top: 8px;font-weight: 500; font-size: 20px; color: buttonColor; margin-left: 15%" >
      首页
    </el-button>

    <el-button @click="toSearch" link style="padding-top: 8px;font-weight: 500; font-size: 20px; color: buttonColor; margin-left: 50px" >
      搜索
    </el-button>
    <el-button @click="toTimeLine" link style="padding-top: 8px;font-weight: 500; font-size: 20px; color: buttonColor; margin-left: 50px" >
      时间轴
    </el-button>
    <el-button @click="toKnowledgeMap" link style="padding-top: 8px;font-weight: 500; font-size: 20px; color: buttonColor; margin-left: 50px" >
      知识图谱
    </el-button>
    <el-button @click="update" link style="padding-top: 8px;font-weight: 500; font-size: 20px; color: buttonColor; margin-left: 25%" >
      退出登录
    </el-button>
    <div style=""/>
  </div>
</template>

<script>
// import { getCookie } from "@/utils/cookie";

import {Management} from "@element-plus/icons-vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {Management},
  data() {
    return {
      buttonColor:'black',
      user: {},
      sessionId: "",
      login: false
    };
  },
  methods: {
    update() {
      this.clearUserSession();
      this.$router.replace("/")
    },
    clearUserSession() {
      // 清除登录相关信息，例如 Token
      localStorage.removeItem("authToken");
      this.$store.commit("setUser", null); // 重置 Vuex 状态
    },
    toHome(){
      this.$router.push("/home")
      this.buttonColor='blue';
    },
    toSearch(){
      this.$router.push("/search")
      this.buttonColor='blue';
    },
    toTimeLine(){
      this.$router.push("/timeline")
      this.buttonColor='blue';
    },
    toKnowledgeMap(){
      this.$router.push("/knowledgeMap")
      this.buttonColor='blue';
    }
  }
}
</script>