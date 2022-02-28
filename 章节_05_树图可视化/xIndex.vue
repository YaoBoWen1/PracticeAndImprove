<template>
   
  <div class="my-look-container">
       
    <div class="col-height-left col-height">
           
      <Menubar
        type-show="myLook"
        :my-look-list="lookList"
        @removeTagItem="clickRemoveNodeId"
        @getData="addNodeId"
        @handleNodeClick="searchTag"
        @myLookBoardArr="checkListTag"
      />
         
    </div>
       
    <div
      class="col-height-right col-height fixHeight"
      style="width: 100vm"
      @mouseup="mouseup($event)"
      @mousedown="mousedown($event)"
      @mousemove="mousemove($event)"
    >
           
      <div id="mainArea">
             
        <!-- <div id="mainArea" @dragstart="dragStart($event)"  @dragend="dragEnd($event)"> -->
               
        <div
          class="node"
          v-for="item in nodeList"
          :key="item.id"
          :style="{ top: item.top, left: item.left }"
          :id="'node-' + item.id"
        >
                     
          <div
            @click="showDataDeal(item)"
            @contextmenu.prevent
            @mouseup="mouseupDoDel($event)"
          >
                          {{ item.name }}              
            <div class="featureIcon" @click.stop="showFeature(item)">
              <svg-icon icon-class="icon-tianjiapingfen"></svg-icon>
            </div>
                       
          </div>
                 
        </div>
               
        <div
          v-if="chooseFeature"
          :style="chooseFeatureLocation"
          class="feature"
        >
                   
          <div class="t" @click="duplicateRemove(chooseFeatureData, '去重')">
            去重
          </div>
                   
          <div class="t" @click="duplicateRemove(chooseFeatureData, '输出')">
            输出
          </div>
                 
        </div>
             
      </div>
           
      <div v-if="chooseDataDeal" class="dataDeal">
               
        <h1>数据处理区</h1>
             
      </div>
           
      <div class="fix-footer rDiv">
               
        <svg-icon
          @click="btnZoom(1)"
          icon-class="icon-tianjiapingfen"
        ></svg-icon>
               
        <svg-icon
          @click="btnZoom(2)"
          icon-class="icon-jianshaopingfen1"
        ></svg-icon>
             
      </div>
         
    </div>
     
  </div>
</template>
<script>
import Menubar from "@/components/sideBar/index.vue";
import * as D3 from "d3";
import { jsPlumb as jsPlumbs } from "jsPlumb";
import $ from "jquery";
export default {
  components: {
    Menubar,
  },
  data() {
    return {
      lookList: [],
      jsPlumb: null,
      dataList: {
        id: 1,
        name: "中国",
        children: [
          {
            id: 2,
            name: "北京",
            children: [
              {
                id: 6,
                name: "11海淀区",
              },
              {
                id: 7,
                name: "高新区",
              },
              {
                id: 71,
                name: "高新区",
              },
              {
                id: 72,
                name: "高新区",
              },
              {
                id: 74,
                name: "高新区",
              },
            ],
          },
          {
            id: 3,
            name: "贵州",
            children: [
              {
                id: 4,
                name: "贵阳",
              },
              {
                id: 5,
                name: "黔西南",
              },
              {
                id: 8,
                name: "黔东南",
              },
            ],
          },
        ],
      },
      nodeList: [],
      lineList: [],
      chooseFeature: false,
      chooseFeatureLocation: {
        top: 0,
        left: 0,
      },
      chooseFeatureData: {},
      chooseDataDeal: false,
      dragMsg: {
        drag: false,
        dragId: null,
      },
      zoom: 1,
      moveLocation: {
        pageX: 0,
        pageY: 0,
      },
      pageLocation: {},
      isMouseDown: false,
      clientWH: {}, //可视区域的宽高
    };
  },
  created() {
    // jsPlumb默认配置
    this.jsPlumb = jsPlumbs.getInstance({
      // 动态锚点、位置自适应
      Anchors: ["RightMiddle", "LeftMiddle"], // 连线的样式 StateMachine、Flowchart，Bezier、Straight
      Connector: ["Flowchart"], // 鼠标是否拖动删除线
      ConnectionsDetachable: false, // 删除线的时候节点不删除
      DeleteEndpointsOnDetach: false, // 连线的两端端点类型：矩形 Rectangle；圆形Dot； eight: 矩形的高 ，idth: 矩形的宽
      Endpoints: [
        ["Dot", { radius: 0.2 }],
        ["Dot", { radius: 3 }],
      ], // 线端点的样式
      EndpointStyle: { fill: "#3c78fb", outlineWidth: 1 }, // 绘制连线
      PaintStyle: {
        stroke: "#8590a6",
        strokeWidth: 1,
        outlineStroke: "transparent", // 设定线外边的宽，单位px
        outlineWidth: 10,
      }, // 绘制连线箭头 // Overlays: [// 箭头叠加 //   ['Arrow', { //     width: 10, // 箭头尾部的宽度 //     length: 8, // 从箭头的尾部到头部的距离 //     location: 1, // 位置，建议使用0～1之间 //     direction: 1, // 方向，默认值为1（表示向前），可选-1（表示向后） //     foldback: 0.623 // 折回，也就是尾翼的角度，默认0.623，当为1时，为正三角 //   }] // ], // 绘制图的模式 svg、canvas
      RenderMode: "svg",
      DragOptions: { cursor: "pointer", zIndex: 2000 }, // 鼠标滑过线的样式
      HoverPaintStyle: { stroke: "#8590a6", strokeWidth: 1, cursor: "pointer" },
    });
  },
  mounted() {
    this.setNodeInfo(this.dataList);
    this.drawLines();
    // 20为缓冲系数
    this.clientWH = {
      height:
        document.body.clientHeight -
        document.querySelector("#dataDeal").clientHeight -
        20,
    }; // this.jsPlumb.draggable('mainArea')
  },
  methods: {
    mouseupDoDel(e) {
      if (e.button === 2) {
        console.log("右键点击");
      }
      this.isMouseDown = false;
    },
    mousemove(event) {
      /* 
        场景：实现类拖拽功能
        方案：拖拽效果较差，出现拖拽投影，拖拽的目标不能为mainArea盒子，
              否则超出视图区域后，无法拖拽
              最终采用鼠标滑动函数
        保存鼠标移动后的距离
        保存鼠标移动后的坐标
        鼠标移动的坐标和保存的坐标相减得出，移动距离
        移动距离和保存的距离相加，得出相较原始位置，新移动距离      
      */
      if (!this.isMouseDown) return;
      let { pageX, pageY } = event; // if (pageX < 260 || pageY < 110 || pageX > this.clientWH.clientWidth || pageY > this.clientWH.clientHeight) {
      //边界处理
      if (pageY > this.clientWH.height || pageY < 210) {
        console.log("越过边界");
        this.mouseup();
        return;
      }
      let { top: pageTop = 0, left: pageleft = 0 } = this.pageLocation;
      let top = pageY - this.moveLocation.pageY;
      top += pageTop;
      let left = pageX - this.moveLocation.pageX;
      left += pageleft;
      $("#mainArea").css({
        top: `${top}px`,
        left: `${left}px`,
      });
      this.pageLocation = { top, left };
      this.moveLocation = { pageX, pageY };
    },
    mousedown(event) {
      this.isMouseDown = true;
      let { pageX, pageY } = event;
      this.moveLocation = { pageX, pageY };
    },
    mouseup() {
      this.isMouseDown = false;
      this.moveLocation = {
        pageX: 0,
        pageY: 0,
      };
    },
    btnZoom(type) {
      console.log(type, this.zoom);
      if (type === 1) {
        if (this.zoom >= 1) return;
        this.zoom += 0.1;
        this.changeZoom(this.zoom);
      }
      if (type === 2) {
        if (this.zoom < 0.3) return;
        this.zoom -= 0.1;
        this.changeZoom(this.zoom);
      }
    },
    changeZoom(scale) {
      $("#mainArea").css({
        "-webkit-transform": `scale(${scale})`,
        "-moz-transform": `scale(${scale})`,
        "-ms-transform": `scale(${scale})`,
        "-o-transform": `scale(${scale})`,
        transform: `scale(${scale})`,
      });
    },
    duplicateRemove(data, text) {
      this.addData(text, data.id);
    },
    addData(text, id) {
      let data = JSON.parse(JSON.stringify(this.dataList));
      if (data.id === id) {
        if (data.children) {
          data.children.push({
            id: Date.now(),
            name: text,
          });
        } else {
          data.children = [];
          data.children.push({
            id: Date.now(),
            name: text,
          });
        }
        this.reset(data);
        return;
      }
      this.deepFind(text, id, data);
      this.reset(data);
    },
    reset(data) {
      this.dataList = data;
      this.jsPlumb.deleteEveryConnection();
      this.setNodeInfo(this.dataList);
      this.drawLines();
      this.chooseFeatureData = {};
      this.chooseFeature = false;
    },
    deepFind(text, id, data = {}) {
      if (!data.children || !data.children.length) return;
      data.children.forEach((item) => {
        if (item.id === id) {
          if (item.children) {
            item.children.push({
              id: Date.now(),
              name: text,
            });
          } else {
            item.children = [];
            item.children.push({
              id: Date.now(),
              name: text,
            });
          }
          return;
        }
        this.deepFind(text, id, item);
      });
    },
    showFeature(data) {
      console.log(data, this.chooseFeatureData);
      let { top, left } = data;
      this.chooseFeatureLocation = {
        top,
        left: Number(left.replace("px", "")) + 126 + "px",
      };
      if (data.id !== this.chooseFeatureData.id) {
        this.chooseFeature = true;
        this.chooseFeatureData = data;
        return;
      }
      this.chooseFeatureData = data;
      this.chooseFeature = !this.chooseFeature;
    },
    showDataDeal() {
      console.log(this.dragMsg.drag); //拖拽 和 点击只能执行一个
      if (this.dragMsg.drag) {
        this.dragMsg.drag = false;
        return;
      }
      this.chooseDataDeal = !this.chooseDataDeal;
    },
    setNodeInfo(tree) {
      // 参考D3API,这里会生成树形数据结构
      const data = D3.hierarchy(tree); // 使用D3 Tree自动布局, nodeSize控制节点x方向和y方向上的距离
      const treeGenerator = D3.tree().nodeSize([80, 200]);
      const treeData = treeGenerator(data); // 获取自动布局后的节点信息
      const nodes = treeData.descendants();
      const topOne = treeData.leaves()[0].x; // 获取父子关系列表
      const links = treeData.links(); /*
        设置节点位置信息
        当前为横向展示
        纵向展示用
        left: item.x + 900 + "px", // 900为初始X方向起点位置
        top: item.y + "px"
      */ // debugger
      this.nodeList = nodes.map((item) => {
        return {
          id: item.data.id,
          name: item.data.name,
          left: item.y + 100 + "px",
          top: item.x + Math.abs(topOne) + "px",
        };
      });
      this.lineList = links.map((item) => {
        return {
          source: `node-${item.source.data.id}`,
          target: `node-${item.target.data.id}`,
        };
      });
    },
    //更新节点位置
    updateNodeList(id, top, left) {
      this.nodeList.forEach((item) => {
        if (item.id === id) {
          item.top = top + "px";
          item.left = left + "px";
        }
      });
      console.log(this.nodeList);
    },
    drawLines() {
      let jsPlumb = this.jsPlumb;
      this.$nextTick().then(() => {
        jsPlumb.ready(() => {
          // 开始节点间的连线
          this.lineList.forEach((item) => {
            // 连线的配置
            jsPlumb.connect(item, {
              isSource: true,
              isTarget: true, // 动态锚点、提供了4个方向 Continuous、AutoDefault
              anchor: "Continuous",
            });
          }); // 让每个节点都可以被拖拽
          this.nodeList.forEach((item) => {
            jsPlumb.draggable("node-" + item.id, {
              // containment: 'parent',
              stop: (event) => {
                console.log(event);
                let [left, top] = event.pos;
                this.updateNodeList(item.id, top, left);
                this.dragMsg = {
                  drag: true,
                  dragId: item.id,
                };
              },
            }); // 给每个节点添加锚点 // jsPlumb.addEndpoint('node-' + (index + 1), { //   anchor: ['Bottom', 'Top', 'Left', 'Right'], //   Overlays: [ //     ['Arrow', { width: 10, length: 8, location: 1, direction: 1, foldback: 0.623 }]] // }, this.commonLink)
          });
        });
        jsPlumb.repaintEverything(); // 重绘
      });
    },
    checkListTag(data) {}, // 搜索当前分组图表
    searchTag() {}, // 删除当前分组
    clickRemoveNodeId(val) {
      this.$confirm("确定删除该分组?", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {});
    }, // 新增分组
    addNodeId(val, isNewAdd) {},
  },
};
</script>
<style lang="scss" scoped>
.my-look-container{
  height: calc(100% - 10px);
  /deep/ .menubar{
    margin-left: 0;
   .el-menu{
      height: 650px !important;
    }
  }
}
.my-look-container {
  margin-top: 10px;
  display: flex;
  .col-height-left {
    flex: 1;
  }
  .col-height-right {
    margin-left: 10px;
    flex: 7;
  }
  .fixHeight{
    height: 100%;
    overflow-y: auto;
    position: relative;
    #mainArea {
      position: relative;
      height: 100%;
    }
    .node {
      position: absolute;
      border-radius: 4px;
      background-color: #ffffff;
      border-left: 2px solid #3c78fb;
      border-right: 2px solid #3c78fb;
      width: 90px;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      box-shadow: 0px 2px 20px 0px rgba(38, 38, 38, 0.14);
      font-size: 14px;
      z-index: 99;
    }
    .feature{
      z-index: 100;
      position: absolute;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: 0px 2px 20px 0px rgba(38, 38, 38, 0.14);
      min-width: 88px;
      .t{
        padding: 15px 0;
        text-align: center;
      }
      .t:hover{
        background: #467ffb;
        color: #ffffff;
      }
    }
    .dataDeal{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 410px;
      background: #ffffff;
      z-index: 101;
    }
    .featureIcon{
      position: absolute;
      right: -20px;
      top: 0px;
      background: #467ffb;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      /deep/ .svg-icon{
        font-size: 20px;
        color: #ffffff;
        position: relative;
        top: 3px;
      }
    }
    .rDiv{
      left: inherit;
      right: 0;
      bottom: 50px;
      width: 80px;
      /deep/ .svg-icon{
        font-size: 21px;
        margin-left: 10px;
      }
    }
  }
}
</style>
