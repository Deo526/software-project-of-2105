<script>
    import OpenSeadragon from 'openseadragon';

    export default {
        props: {
            imageUrl: String
        },
        mounted() {
            const viewer = OpenSeadragon({
                id: "openseadragon1",//标签id
                zoomInButton:   "zoom-in",
                zoomOutButton:  "zoom-out",
                fullPageButton: "expand",
                showHomeControl: false,
                showNavigator: true, // 是否显示导航缩略图
                defaultZoomLevel:0.4, //初始化放大倍率
                maxZoomLevel: 2.8,
                minZoomImageRatio: 0.3,
                // minScrollDeltaTime: 70,
                zoomPerScroll:1.2,
                prefixUrl: "../assets/openseadragonImages", //插件小图标
                tileSources : {
                    type: "image",
                    url: this.imageUrl
                    // url: "https://www.sxhm.com/Uploads/Picture/2021/11/10/s618ba9b14aa6d.png"
                }
            });
        }
    }
</script>

<template>
    <div>
        <div class="relative">
            <div id="openseadragon1" :style="{backgroundColor:'rgb(240, 240, 240)', width: '100%', height: 'calc(-9.2rem + 100dvh)', position: 'relative'}"></div>
        </div>
        <div class="controller-wrapper px-4 py-6 md:p-6 flex justify-between flex-col md:flex-row gap-4">
            <div class="flex flex-row items-center gap-2 order-2 md:gap-4 md:order-1">
                <div class="flex justify-between sm:justify-start w-full sm:w-auto gap-2 md:gap-4">
                    <button id="zoom-in" class="button text-xs flex items-center justify-center h-8 px-4 py-1">
                        放大
                        <ZoomIn style="width: 1em; height: 1em;" class="inline ml-1"/>
                    </button>
                    <button id="zoom-out" class="button text-xs flex items-center justify-center h-8 px-4 py-1">
                        缩小
                        <ZoomOut style="width: 1em; height: 1em;" class="inline ml-1"/>
                    </button>
                </div>
            </div>
            <div class="flex items-center gap-2 md:gap-4 order-1 md:order-2">
                <button id="expand" class="button text-xs flex items-center justify-center h-8 px-4 py-1">
                    展开
                    <FullScreen style="width: 1em; height: 1em;"  class="inline ml-1"/>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.button {
    border-width: 2px;
    border-color: black;
    font-weight: 700;
}

.button:hover {
    border-color: #b64619d2;
    background-color: #7f3222;
    color: white;
}

</style>