import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'; // 注意这里导入的是 Element Plus 而不是 Element UI
import 'element-plus/dist/index.css'
import axios from 'axios'; // 导入axios
import * as ElementPlusIconsVue from '@element-plus/icons-vue';     //导入element-icon
import './tailwindcss/tailwind.css';    //导入tailwind css

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faLink, faCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleUp, faLink, faCircle, faLocationDot);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 创建 Vue 应用
const app = createApp(App);

// 在应用中注册 FontAwesomeIcon 组件
app.component("font-awesome-icon", FontAwesomeIcon);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// 使用 Element Plus 插件
app.use(ElementPlus);
app.config.globalProperties.$axios = axios;
// 使用 Vuex store 和 Vue Router
app.use(store).use(router).mount('#app');