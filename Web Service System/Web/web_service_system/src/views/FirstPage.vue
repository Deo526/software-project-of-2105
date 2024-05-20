<template>
  <!-- <div style="
    display: flex;
    background-color: white;
    font-family: Arial, sans-serif;
    height: 70px
    " class="flex-row ">
    <div style="padding-top: 15px;margin-left: 1%">
      <el-icon style="font-size: 40px"><Management /></el-icon>
    </div>
    <div style="padding-top: 10px;margin-left: 0.2%">
      <el-text style="font-weight: 550; font-size: 35px; color: black;">
        海外文物知识系统
      </el-text>
    </div>
    <div style="padding-top: 20px; margin-left: 72%">
      <el-button @click="login" link style="font-weight: 500; font-size: 20px; color: black; " >
        登录注册
      </el-button>
    </div>
    <div style="flex: 1" />
  </div> -->
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
        <!-- <div class="flex felx-row">
          <el-menu-item index="/home" style="font-weight: 400; font-size: 20px; color: black;">首页</el-menu-item>
          <el-menu-item index="/search" style="font-weight: 400; font-size: 20px; color: black;">搜索</el-menu-item>
          <el-menu-item index="/timeline" style="font-weight: 400; font-size: 20px; color: black;">时间轴</el-menu-item>
          <el-menu-item index="/knowledgeMap" style="font-weight: 400; font-size: 20px; color: black;">知识图谱</el-menu-item>
        </div> -->
        <el-button @click="login" link style="font-weight: 500; font-size: 20px; color: black; " >
        登录/注册
      </el-button>
      </el-menu>
    </div>
    <!-- 添加一个空的 div 占位，防止内容被导航栏遮挡 -->
    <div style="height: 70px;"></div>
    <router-view></router-view>

    <el-card class="box-card">
      <el-carousel :interval="4000" type="card" height="600px">
        <el-carousel-item v-for="(item,index) in artifactImg" :key="index">
          <img :src="item.imageUrl" class="home" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <div style="margin-top: 30px;margin-left: 80px">
      <h1>登录之后查看更多文物和详细信息,以及体验更多功能。</h1>
    </div>
  </div>
    <!-- <el-card class="box-card">
      <el-carousel :interval="4000" type="card" height="600px">
        <el-carousel-item v-for="(item,index) in artifactImg" :key="index">
          <img :src="item.imageUrl" class="home" alt=""/>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  <div style="margin-top: 30px;margin-left: 80px">
    <h1>登录之后查看更多文物和详细信息,以及体验更多功能。</h1>
  </div> -->

</template>

<script>
// import {getCookie} from "@/utils/cookie";
// import request from "@/utils/request";

import {Management} from "@element-plus/icons-vue";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {Management},
  data(){
    return{
      number1:6,
      artifactImg:{
        id:0,
        imageUrl:""
      }
    };
  },
  mounted() {
    this.pictureChange();
  },
  methods: {
    login() {
      this.$router.push("/login")
    },
    pictureChange(){
      axios.post('http://8.130.122.31:8000/artifact/getRandom/', {
        number:this.number1,
      })
          .then(response => {
            if (response.status === 200) {
              const dataList = response.data;
              const artifactGroups = [];

              dataList.forEach(group => {
                const artifactImg = {
                  id:group.id,
                  imageUrl: group.imageUrl
                };
                artifactGroups.push(artifactImg);
              });

              this.artifactImg = artifactGroups;
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })
          .finally(() => {
            this.loading = false; // 关闭加载状态
          });
    }
  }
};
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  object-fit: cover;
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