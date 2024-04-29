import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'; // 注意这里导入的是 Element Plus 而不是 Element UI
import 'element-plus/dist/index.css'

// 创建 Vue 应用
const app = createApp(App);

// 使用 Element Plus 插件
app.use(ElementPlus);

// 使用 Vuex store 和 Vue Router
app.use(store).use(router).mount('#app');