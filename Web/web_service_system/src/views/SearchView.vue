<template>
  <el-row style="height: 10%;">
    <el-col :span="12">
      <el-input v-model="searchQuery" style="width: 100%" size="large" placeholder="Please input" />
    </el-col>
    <el-col :span="12">
      <el-button @click="search" type="primary" class="btn btn-primary btn-sm" style="margin-left: 10%;">搜索</el-button>
    </el-col>
  </el-row>

    <el-scrollbar height="700px">
      <el-card style="max-width: 480px" v-for="item in 20" :key="item">
        <template #header>Yummy hamburger</template>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%" />
      </el-card>
    </el-scrollbar>


</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
  name: 'SearchView',
  setup() {
    let error = ref('');
    let searchQuery = ref('');
    let users = ref('');
    let copy_users = ref('');
    const getUsers = async () => {
      try {
        const response = await axios.post('http://8.130.122.31:8000/artifact/getRandom/', {
          number: 5 // 你想要的文物数量
        });

        if (response.status === 200) {
          users = ref(response.data); // 将返回的文物列表存储在ref变量中
          copy_users = ref(response.data);
          console.log(users.value);
        } else {
          console.error('请求失败');
        }
      } catch (error) {
        console.error('发生错误:', error);
      }
    };
    getUsers();

    const search = () => {
      users.value = [];
      for (var i = 0; i < copy_users.value.length; i++) {
        if (searchQuery.value === copy_users.value[i].name) {
          users.value.push(copy_users.value[i]);
        }
      }
      console.log(users.value);
    }
    return {
      users,
      searchQuery,
      error,
      search,
      getUsers,
    };
  }
}


</script>

<style scoped>
.scrollbar-demo-item:hover {
  cursor: pointer;
}
</style>