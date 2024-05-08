<template>
  <el-card class="box-card">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in image" :key="index">
        <img :src="item" class="home"/>
      </el-carousel-item>
    </el-carousel>
  </el-card>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content" >
      <img src="../assets/image/4.png" alt="" class="picture" />
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content" >
      介绍文字
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content" >
      <div class="grid-content" >
        <img src="../assets/image/4.png" alt="" class="picture" />
      </div>
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content" >
      介绍文字
    </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content" >
    介绍文字
  </div>
  </el-col>
    <el-col :span="6"><div class="grid-content" >
      <img src="../assets/image/4.png" alt="" class="picture" />
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content" >
      介绍文字
    </div>
    </el-col>
    <el-col :span="6"><div class="grid-content" >
      <div class="grid-content" >
        <img src="../assets/image/4.png" alt="" class="picture" />
      </div>
    </div>
    </el-col>

  </el-row>
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
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


.grid-content {
  border-radius: 4px; /* 圆角边框 */
  min-height: 36px; /* 最小高度 */
  background-color: white; /* 设置背景色为白色 */
  color: #030111; /* 文字颜色 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 添加边框阴影 */
  margin-top: 10px;
}
.picture{
  width: 100%; /* 让图片宽度填满其父容器 */
  height: 100%; /* 让图片高度填满其父容器 */
  //object-fit: cover; /* 让图片保持比例并填充整个容器，可能会裁剪部分图片 */
}
</style>