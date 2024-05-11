<template>
  <el-row>
      <el-col :span="23">
          <el-input v-model="searchQuery" style="width: 240px" size="large" placeholder="Please input" />
      </el-col>
      <el-col :span="1">
          <el-button @click="search" type="primary" class="btn btn-primary btn-sm">搜索</el-button>
      </el-col>
  </el-row>

  <el-scrollbar height="700px">
    <div class="container">
      <el-card style="max-width: 480px" shadow="hover" v-for="user in users" :key="user.id" class="scrollbar-demo-item">
        <template #header>
          <div class="name">{{ user.name }}</div>
        </template>
        <img :src="user.imageUrl" style="width: 100%" />
      </el-card>
    </div>
  </el-scrollbar>

</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default{
name:'SearchView',
setup(){
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

const search = () =>{
    users.value = [];
    for (var i = 0; i < copy_users.value.length; i ++ ) {
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
.container {
column-count: 2; /* 将容器分成两列 */
column-gap: 20px; /* 列之间的间隔 */
}

.container .scrollbar-demo-item {
margin-bottom: 10px;
}

.scrollbar-demo-item:hover {
cursor: pointer;
}
</style>