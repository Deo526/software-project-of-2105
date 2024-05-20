<script>
    import viewer from "../components/Viewer.vue"
    import Header from "../header/Header.vue"
    import card from "../components/Card.vue"
    import {ArrowRight} from "@element-plus/icons-vue";
    import axios from 'axios'
    export default {
        components: {
           viewer,
            card,
            Header
        },
        computed: {
            ArrowRight() {
                return ArrowRight
            }
        },
        data() {
            return {
                artwork: {
                    id: "",
                    name: "",
                    time: "",
                    creator: "",
                    level: "",
                    placeOfOrigin: "",
                    museum: "",
                    type: "",
                    size: "",
                    material: "",
                    description: "",
                    collectionUrl: "",
                    imageUrl: ""

                },
                relatedArtworks: [],
                number: 16,
                // url: "https://www.sxhm.com/Uploads/Picture/2021/11/11/s618c7eba48d28.png",
            };
        },
        created() {
            this.scrollToTop();
            this.artwork.id = this.$route.params.id;
            this.fetchArtworksDetails();
            this.fetchRelatedArtworks();
        },
        methods: {
            fetchArtworksDetails() {
                axios.post('http://8.130.122.31:8000/artifact/getDetail/', {id:this.artwork.id})
                    .then(response => {
                        this.artwork = response.data;
                    })
                    .catch(error => {
                        console.log('Error fetching artwork details:', error);
                    });
            },

            fetchRelatedArtworks() {
                axios.post('http://8.130.122.31:8000/artifact/recommend/', {number:this.number, id:this.artwork.id})
                    .then(response => {
                        this.relatedArtworks = response.data;
                    })
                    .catch(error => {
                        console.log('Error fetching related artifacts:', error);
                    });
            },

            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>

<template>
    <div id = "body">
        <div class = "header md:z-[9996] md:sticky md:top-0">
            <Header></Header>
        </div>
        <div id = "main" class="flex flex-col relative pb-4 pt-[1px]">
            <!-- flex布局details and picture -->
            <div class="flex flex-col md:flex-row md:items-start">
                    <div class="basis-7/12 pb-5 md:pb-0 md:sticky md:top-[70px]" v-if="artwork.imageUrl">
                        <viewer :imageUrl="artwork.imageUrl"></viewer>
                    </div>
                <div class="details-container basis-5/12 px-4 pb-5 md:px-16 md:pb-0 pt-3">
                    <div class="navigator pb-4 text-15 leading-[150%]">
                        <el-breadcrumb :separator-icon="ArrowRight">
                            <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ name: 'Search' }">搜索</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>

                    <div class="mb-5 md:mb-0 flex-col flex">
                        <!-- 文物名 -->
                        <h3 class="custom-h3" >{{artwork.name}}</h3>
                        <!-- 文物形成时间 -->
                        <!-- <div :style = "{ fontSize: '16px' }">1643</div> -->
                    </div>
                    <div>
                        <div class="grid grid-cols-1 pb-4 gap-2 mt-2">
                            <div class="flex flex-col gap-2 item2-start">
                                <!-- 文物年代 -->
                                <h3 class="custom-h3">{{ artwork.time === "无" ? "时期不详" : artwork.time }}</h3>
                                <!-- 作者生平 -->
                                <div>{{ artwork.creator === "无" ? "" : artwork.creator }}</div>
                            </div>
                            <!-- 文物级别 -->
                            <div class="level w-fit">{{ artwork.level === "无" ? "未定级" : artwork.level }}</div>
                            <!-- 文物材质 -->
                            <div>{{artwork.material}}</div>
                            <!-- 文物大小 -->
                            <div>{{artwork.size}}</div>
                        </div>
                        <div class="py-4 gap-x-2 flex border-t-2 border-black">
                            <span :style="{fontWeight: 600}">出土地址：</span>
                            <span>{{artwork.placeOfOrigin}}</span>
                        </div>
                        <div class="py-4 gap-x-2 flex border-b-2 border-t-2 border-black">
                            <span :style="{fontWeight: 600}">
                                <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #7f3222;" />
                                所在博物馆：
                            </span>
                            <span>{{artwork.museum}}</span>
                            <a :href="artwork.collectionUrl" target="_blank" class="ml-4 text-sm text-slate-500 flex items-center hover:underline">
                                <font-awesome-icon icon="fa-solid fa-link" class="mr-1" />
                                <span class="align-middle">点此了解</span>
                            </a>
                        </div>
                        <div class="mt-5 grid gap-2">
                            <h3 class="custom-h3">文物描述</h3>
                            <p class="leading-7">
                                {{ artwork.description === "无" ? "暂无描述" : artwork.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 相似推荐 -->
            <div class="flex flex-row gap-12 px-12">
                <div class="xsm:hidden md:sticky md:top-20 h-fit pt-12 pb-12 basis-1/6">
                    <img class="mb-6 w-full" :style="{height: '200px', objectFit: 'contain'}" :src="artwork.imageUrl">
                    <div id="artwork-titile-sidebar" class="flex flex-col w-full max-w-[120rem] xl:mx-auto mb-5 md:mb-0">
                        <h3 class="custom-h3">{{artwork.name}}</h3>
                        <div>{{artwork.time}}</div>
                        <div class="pt-3">{{ artwork.level === "无" ? "未定级" : artwork.level }}</div>
                        <div class="mt-7 cursor-pointer w-fit" @click="scrollToTop" :style="{fontWeight: '600'}">
                            返回文物视图
                            <font-awesome-icon :icon="['far', 'circle-up']" class="ml-2" />
                        </div>
                    </div>
                </div>
                <div id="see-also-container" class="basis-5/6">
                    <h3 class="custom-h3 border-b-2 border-black py-4">相似推荐</h3>
                    <div id="card-container" class="mt-4 grid gap-x-4 gap-y-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                         <card v-for="(item, index) in relatedArtworks" :key="index" :picUrl="item.imageUrl" :artworkTitle="item.name" :artworkMaterial="item.material" :id="String(item.id)"></card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

html body {
    margin: 0;
    padding: 0;
}

.header {
    height: 70px;
    width: 100%;
    background: white;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.controller-wrapper {
    opacity: 1;
    height: auto;
    padding: auto;
    background-color: rgb(220, 220, 220);
}

.details-container {
    background-color: white;
    padding-left: 50px;
    padding-right: 50px;
}

.custom-h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 500;
}

.level {
    background-color: rgba(127, 50, 34, 0.8);
    border-radius: 20px;
    color: white;
    padding: 1px 8px;
}

#author-info, #title {
    padding-bottom: 10px;
}

.text-inline {
    margin-bottom: 5px;
}
</style>
