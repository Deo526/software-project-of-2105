<template>
  <div style="
    display: flex;
    background-color: #24292f;
    font-family: Arial, sans-serif;
    height: 6vh
    ">
    <div style="padding-top: 0px; padding-left: 15px">
      <el-button link style="font-weight: bold; font-size: 35px; color: white;">
        海外文物知识系统
      </el-button>
    </div>
    <div style="padding-top: 10px; padding-left: 15px">
      <el-button @click="update" link style="font-weight: bold; font-size: 20px; color: white; margin-left: 1100px;" >
        退出登录
      </el-button>
    </div>
    <div style="flex: 1" />

  </div>
</template>

<script>
// import { getCookie } from "@/utils/cookie";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      user: {},
      sessionId: "",
      login: false
    }
  },
  // created() {
  //   if(getCookie("user")) {
  //     this.user = JSON.parse(getCookie("user"))
  //     this.login = true
  //   } else {
  //     this.login = false
  //   }
  // },
  methods: {
    update() {
      this.$router.push("/firstPage")
    }
  }
}
</script>