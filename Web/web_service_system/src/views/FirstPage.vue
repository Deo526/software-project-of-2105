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
    <div style="padding-top: 10px; padding-left: 15px; margin-left: 70%">
      <el-button @click="login" link style="font-weight: bold; font-size: 20px; color: white;" >
       登录注册
      </el-button>
    </div>
    <div style="flex: 1" />

  </div>
  <el-card class="box-card">

    <el-carousel :interval="4000" type="card" height="600px">

      <el-carousel-item v-for="(item,index) in image" :key="index">

        <img :src="item" class="home"/>
      </el-carousel-item>

    </el-carousel>
  </el-card>
</template>

<script>
// import {getCookie} from "@/utils/cookie";
// import request from "@/utils/request";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  data(){
    return{
      image:[
        require("../assets/image/3.png"),
        require("../assets/image/4.png"),
        require("../assets/image/5.png"),
        require("../assets/image/6.png"),
        require("../assets/image/7.png"),
        require("../assets/image/8.png"),
      ],
    };
  },
  methods: {
    login() {
      this.$router.push("/login")
    }
  }
};
</script>
<style>
.home{
  height: 600px;
  widrh:800px;
  position: relative;
  display: block; /* 设置图片为块级元素 */
  margin: auto; /* 设置外边距为自动，实现水平居中 */
  max-width: 100%; /* 让图片最大宽度为父容器的宽度 */
  max-height: 100%; /* 让图片最大高度为父容器的高度 */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>