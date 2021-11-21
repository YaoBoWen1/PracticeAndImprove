<template>
    <div>
        <h3>v-text</h3>
        <!-- 避免刷新文字闪烁 或者 v-cloak -->
        <div v-text="title"></div>
        <h3>v-html</h3>
        <!-- 解析html标签 -->
        <div v-html="html"></div>
        <h3>v-on + click单击事件 + click双击事件+ 按下键盘事件</h3>
        <div>
            <input type="text" v-model="value1"/>
            <button @click="changeValue">click单击</button>
            <button @dblclick="changeValue">click双击</button>
            <!-- 键盘按下enter键才会触发 enter为修饰符 -->
             <button @keydown.enter="changeValue">按下键盘事件－回车按钮</button>
              <!-- 键盘按下ctrl+c才会触发 ctrl.c为修饰符，修饰符可以连写 -->
             <button @keydown.ctrl.c="changeValue">按下键盘事件－ctrl+c同时按下才触发</button>
        </div>
        <h3>v-on + 阻止事件冒泡 ＋ 阻止事件默认动作</h3>
        <div class="action1" @click="action1()">
            <div class="d1">d1</div>
            <div class="action2" @click="action2()">
                <div class="d2">d2</div>
                <div class="action3" @click="action3($event)">
                    <div class="d3">d3</div>
                    <!-- 阻止冒泡修饰符.stop -->
                    <div class="action4" @click.stop="action4()">
                        <div class="d3">d4</div>
                    </div>
                </div>
            </div>
        </div>
        <h3>v-on + 阻止事件默认动作 ＋ 阻止事件冒泡</h3>
        <div class="action1" @click="action1()">
            <div class="d1">d1</div>
            <div class="action2" @click="action2()">
                <div class="d2">d2</div>
                <div class="action3" @click="action3($event)">
                    <div class="d3">d3</div>
                    <!-- 阻止冒泡修饰符.stop-->
                    <div class="action4" @click.stop="action4()">
                        <div class="d3">d4</div>
                        <div><a href="https://www.baidu.com/" @click="open($event)">百度</a></div>
                        <div><a href="https://www.baidu.com/" @click.prevent.stop="open">百度</a></div>
                    </div>
                </div>
            </div>
        </div>
        <h3>v-on + once修饰符</h3>
        <div @click.once="sign">签到</div>
    </div>
</template>
<script>
export default {
    name: 'Direct',
    data(){
        return {
            title: 'v-text标题',
            html: '<div>v-html内容</div>',
            value1: ''
        }
    },
    methods:{
        changeValue(e){
            console.log(e)
            this.value1++
        },
        action1(){
            console.log(1)
        },
        action2(){
            console.log(2)
        },
        // e.target 事件的触发者
        // e.currentTarget 事件的绑定者
        // stopPropagation 阻止事件冒泡 不阻止默认事件
        // preventDefault  阻止默认事件 不阻止冒泡
        // return false    阻止默认事件 阻止事件冒泡
        action3(e){
            console.log(3,e)
            // console.log(e.target, e.currentTarget)
            e.stopPropagation() //原生写法阻止冒泡
        },
        action4(){
            console.log(4)
        },
        open(e){
            e.preventDefault() //原生写法阻止默认事件
            console.log('open')
        },
        sign(){
            console.log('签到')
        }
    }
}
</script>
<style scoped>
</style>