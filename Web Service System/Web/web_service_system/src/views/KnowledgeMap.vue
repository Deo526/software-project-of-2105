<template>
  <div style="height: 1000px; width: 100%;" ref="Screen">
    <div class="left" id="viz" ref="viz1"></div>
  </div>
</template>


<script>
export default {
  name: 'KnowledgeMap',
  components: {},
  props: {},
  data() {
    return {
      viz: {} //定义一个viz对象
    }
  },
  mounted() {
    this.draw();
  },

  methods: {
    draw() {
      var config = {
        container_id: "viz",
        server_url: "bolt://101.200.145.59:7687",
        server_user: "neo4j",
        server_password: "12345678",
        labels: {
          "info": {
            "caption": "name",
            "font": {
              "size": 15,
              "color": "#100000"
            },


          },
          "relic": {
            "caption": "name",
            "font": {
              "size": 25,
              "color": "#000000"
            },
            "community": "community"
          },

        },
        relationships: {
          "年代": {
            "thickness": "count",
            "caption": true
          },
          "现藏博物馆": {
            "thickness": "count",
            "caption": true
          },
          "类型": {
            "thickness": "count",
            "caption": true
          },
          "藏品原产地": {
            "thickness": "count",
            "caption": true
          },
          "藏品材质": {
            "thickness": "count",
            "caption": true
          },
          "藏品等级": {
            "thickness": "count",
            "caption": true
          },
        },
        arrows: true,
        hierarchical: false,
        initial_cypher: "MATCH p=()-[]->() RETURN p LIMIT 300"

      };

      this.viz = new NeoVis.default(config);
      this.viz.render();
      console.log(viz);

    }
  }
}
</script>

<style scoped>
#viz {
  width: 100%;
  height: 100%;
  font: 22pt arial;
}
</style>