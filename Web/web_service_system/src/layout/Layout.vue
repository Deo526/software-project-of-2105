<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0; height: 6vh">
        <Header/>
      </el-header>
      <el-container style="padding: 0; background-color: #f2f2f2">
        <el-aside :style="{ width: fIsCollapse ? '64px' : '220px' }">
          <Aside v-on:getIsCollapse="getIsCollapseHandle" v-bind:isCollapse="fIsCollapse" />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import Header from "@/components/Header";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  components: {
    Aside,
    Header
  },
  data() {
    return {
      fIsCollapse: false,
    }
  },
  methods: {
    getIsCollapseHandle(data) {
      this.fIsCollapse = data;
    }
  }
}
</script>