<template>
  <!--  轮播图-->
  <el-card class="box-card">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="(item,index) in artifactImg" :key="index">
        <img :src="item.imageUrl" class="home" alt="" @click="goToDetailPage(item.id)"/>
      </el-carousel-item>
    </el-carousel>
  </el-card>
      <div style="margin-top: 50px;display:flex">
      <el-card style="width: 45%; margin-left: 12%;" shadow="always">
        <img src="../assets/image/5.jpg" alt="" class="picture" />
      </el-card>
        <div style="background-color: #3CA8FA; width: 20vw; height: 20vh;margin-left: 15%;margin-top: 30px"></div>
      <el-card style="width: 38%;height:50%;margin-left: -40%;margin-top: 60px" shadow="hover">
        <div class="mb-5 md:mb-0 flex-col flex" style="margin-top: 30px">
          <!-- 文物名 -->
          <h2 class="custom-h3" >装备</h2>
        </div>
        <div>
          <div class="grid grid-cols-1 pb-4 gap-2 mt-2">
            <div class="flex flex-col gap-2 item2-start">
              <!-- 文物年代 -->
              <h3 class="custom-h3">20世纪80年代</h3>
            <!-- 文物大小 -->
            <div>1135mm；：420毫米；cb拉链：595mm；手腕拉链：110mm；<br>
              套筒：595mm；：1175毫米；套筒：570mm；cb领：50mm；<br>侧分面：505mm；</div>
          </div>

          <div class="py-4 gap-x-2 flex border-b-2 border-t-2 border-black">
                            <span :style="{fontWeight: 600}">
                                <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #7f3222;" />
                                所在博物馆：
                            </span>
            <span>奥克兰博物馆</span>
          </div>
          <div class="mt-5 grid gap-2">
            <h3 class="custom-h3">文物描述</h3>
            <p class="content">
              女式服装，包括连衣裙和配套的外套。太妃糖色连衣裙，长袖，颈领和珠宝腰带。有萤火虫和山鸡花印花的褶皱外套。1） 浅色太妃糖色（抛光棉）及膝连衣裙；整流罩颈；披在中间的正面从四个褶垂到每个肩膀；垫肩；前上和后上的blouson效应；具有交叉效果的裙摆到合适的左手边；修身长袖；手腕内侧有短拉链；中背部有长拉链；装饰带连接到中前部，金属钩/孔眼固定到中后部；腰带上覆盖着滚动的叶子状“金色”绳索和紫红色和蓝绿色的闪光亮点；全米色合成纤维衬里；（.2）被毛中至小腿长度；中国龙袍的样式；有立领；齐肘钟形袖子；平直的中央前部开口；深侧向两侧分开；衣领外部装饰有“金色”包裹的绳索、柔和颜色的金属压钉和合成闪光；所用面料为大型印花中式山鸡花图案的室内装饰面料；很好地利用印刷的边框图案；完全衬有浅色太妃糖色的抛光棉。

            </p>
          </div>
        </div>
        </div>
      </el-card>

    </div>
    <div  style="margin-top: 50px;display: flex">
      <div style="background-color: #3CA8FA; width: 20vw; height: 20vh;margin-left: 10%;margin-top: 45%"></div>
      <el-card style="width: 38%;height: 50%;margin-left: -19%;margin-top: 8%" shadow="always">
      <div>
        <div class="mb-5 md:mb-0 flex-col flex" style="margin-top: 30px">
          <!-- 文物名 -->
          <h2 class="custom-h3" >清蕉叶纹铜觚</h2>
        </div>
        <div>
          <div class="grid grid-cols-1 pb-4 gap-2 mt-2">
            <div class="flex flex-col gap-2 item2-start">
              <!-- 文物年代 -->
              <h3 class="custom-h3">清</h3>
              <!-- 文物大小 -->
              <div>高30.5cm，口宽27.5cm，4.855kg</div>
            </div>

            <div class="py-4 gap-x-2 flex border-b-2 border-t-2 border-black">
                            <span :style="{fontWeight: 600}">
                                <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #7f3222;" />
                                所在博物馆：
                            </span>
              <span>陕西博物馆</span>
            </div>
            <div class="mt-5 grid gap-2">
              <h3 class="custom-h3">文物描述</h3>
              <p class="content1">
                花觚仿铜器造型，四面各有 出戟 。 器身施古铜彩，局部纹饰描绘金彩，器体模印蕉叶纹，束腰处模印夔龙纹。 外底印“ 大清乾隆年制 ”三行六字篆书款。 古铜彩 的烧制较为复杂，首先要在高温下烧成茶叶末色釉，再于其上加绘金彩和绿锈斑色，然后入窑低温二次烧制，才能达到古旧斑驳的效果。 乾隆时期的瓷器仿制出类拔萃，惟妙惟肖，其中尤以仿铜器最为成功。 此件花觚造型逼真，釉色古朴，纹路清晰，令人叫绝。 清乾隆古铜彩蕉叶纹出戟花觚，现藏北京故宫博物院，是清乾隆年间的瓷器
              </p>
            </div>
          </div>
        </div>
    </div>
      </el-card>

      <el-card style="width: 45%;margin-left: -3%" shadow="hover">
        <img src="../assets/image/2.jpg" alt="" class="picture" />
      </el-card>
    </div>

  <div style="margin-left: 10%;margin-right: 10%;margin-top: 5%">
    <h2>馆藏资源</h2>
    <el-divider style="margin-right: 10%"/>
    <div id="card-container" class="mt-4 grid gap-x-4 gap-y-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      <card v-for="(item, index) in artifact" :key="index" :picUrl="item.imageUrl" :artworkTitle="item.name" :artworkMaterial="item.material" :id="String(item.id)"></card>
    </div>
  </div>

</template>

<script>
// import {getCookie} from "@/utils/cookie";
// import request from "@/utils/request";

import axios from "axios";
import Header from "@/components/Header.vue";
import card from "@/components/Card.vue";



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {card, Header},
  data(){
    return{
      number: 12,
      artifact:{
        id:0,
        name:"",
        time:"",
        museum:"",
        size:"",
        material:"",
        imageUrl:""
      },
      number1:6,
      artifactImg:{
        id:0,
        imageUrl:""
      }
    };
  },
  mounted() {
    this.InfoChange(); // 在组件挂载后调用 change 方法
    this.pictureChange();
  },
  methods: {
    InfoChange() {
      axios.post('http://8.130.122.31:8000/artifact/getRandom/', {
        number:this.number,
      })
          .then(response => {
            if (response.status === 200) {
              const dataList = response.data;
              const artifactGroups = [];

              dataList.forEach(group => {
                const artifact = {
                  id:group.id,
                  name: group.name,
                  time: group.time,
                  museum: group.museum,
                  size: group.size,
                  material: group.material,
                  imageUrl: group.imageUrl
                };
                artifactGroups.push(artifact);
              });

              this.artifact = artifactGroups;
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })
          .finally(() => {
            this.loading = false; // 关闭加载状态
          });
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
    },
    goToDetailPage(id) {
      this.$router.push({ name: 'DetailsPage', params: { id}});
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
  /* object-fit: cover; 让图片保持比例并填充整个容器，可能会裁剪部分图片 */
}
h2 {
  font-size: 30px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
  color: #0a0909; /* 设置字体颜色 */

  border: 2px solid #000; /* 添加一个2像素宽度、黑色实线的边框 */
  padding: 10px; /* 可选：为了让内容与边框之间有一定距离，添加内边距 */
  width: 300px;
  border-radius: 20px
}
.content{
  text-indent: 2em; /* 首行缩进两个字符 */
  text-align: justify; /* 两边对齐 */
  line-height: 2; /* 行间距加大 */

}
.content1{
  text-indent: 2em; /* 首行缩进两个字符 */
  text-align: justify; /* 两边对齐 */
  line-height: 2; /* 行间距加大 */
  margin-right: 60px;
}

</style>