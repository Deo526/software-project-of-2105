<template>
    <el-row>
        <el-col :span="23">
            <el-input v-model="searchQuery" style="width: 240px" size="large" placeholder="Please input" />
        </el-col>
        <el-col :span="1">
            <el-button @click="search" type="primary" class="btn btn-primary btn-sm">搜索</el-button>
        </el-col>
    </el-row>

  <!-- <el-scrollbar height="600px">
    <el-card style="max-width: 480px" v-for="user in users" :key="user.id" class="scrollbar-demo-item">
      <template #header>
        <div class="username">{{ user.username }}</div>
      </template>
      <img
        :src="user.photo"
        style="width: 100%"
      />
    </el-card>
  </el-scrollbar> -->
  <el-scrollbar height="700px">
  <div class="container">
    <el-card style="max-width: 480px" v-for="user in users" :key="user.id" class="scrollbar-demo-item">
      <template #header>
        <div class="username">{{ user.username }}</div>
      </template>
      <img
        :src="user.photo"
        style="width: 100%"
      />
    </el-card>
  </div>
</el-scrollbar>

</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';
export default{
name:'SearchView',
setup(){
  let error = ref('');
  let searchQuery = ref('');
  let users = ref('');     
  let copy_users = ref('');   
  $.ajax({
      url:'https://app165.acapp.acwing.com.cn/myspace/userlist/',
      type:"get",
      success(resp){
          users.value = resp;
          copy_users.value = resp;
      }
  });

  const search = () =>{
      users.value = [];
      for (var i = 0; i < copy_users.value.length; i ++ ) {
          if (searchQuery.value === copy_users.value[i].username) {
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
  };
}
}


</script>

<style scoped>
.container {
  column-count: 2; /* 将容器分成两列 */
  column-gap: 20px; /* 列之间的间隔 */
}
</style>