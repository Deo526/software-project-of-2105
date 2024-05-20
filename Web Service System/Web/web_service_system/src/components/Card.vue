<script>
export default {
  props: {
    picUrl: String,
    artworkTitle: String,
    artworkMaterial: String,
    id: String
  },
  methods : {
    goToDetailPage() {
      this.$router.push({ name: 'DetailsPage', params: { id: this.id }});
    }
  }
}
</script>

<template>
  <div class="card-wrapper shadow-right-bottom flex flex-col p-4 bg-white" :style="{height: '368px'}" @click="goToDetailPage">
    <img :src="picUrl" :style="{height: '200px', objectFit: 'contain'}" class="picture">
    <div class="mt-5 flex flex-col gap-3">
      <p class="title-text pb-1 border-b-[2px] border-dotted border-zinc-500">
        <font-awesome-icon icon="fa-solid fa-circle" size="2xs" style="color: #7f3222;"/>
        {{artworkTitle}}
      </p>
      <p class="text">{{artworkMaterial}}</p>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper:hover {
  cursor: pointer; /* 鼠标悬停时鼠标样式变为可点击样式 */
  transform: scale(1.025); /* 卡片有一个放大效果 */
}

.picture {
  transition: transform 0.5s ease;
}

.picture:hover {
  transform: scale(1.25);
}

.shadow-right-bottom {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); /* 只在右下方显示阴影 */
  transition: transform 0.3s ease; /* 添加过渡效果 */
}

.title-text {
  font-size: 20px;
  font-weight: 500;
  /* text-decoration: underline; */
}

.text {
  overflow: hidden;
}
</style>