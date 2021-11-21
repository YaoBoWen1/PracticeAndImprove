<template>
    <div>
        <h3>动态组件区域</h3>
        <!-- 普通加载全局组件 -->
        <globalComponent />
        <!-- 自动化加载全局组件 -->
        <test-banner /> 
        <div class="flex jcs">
            <button @click="flag = 'son1'" :class="[flag==='son1'?'select':'']">组件1</button>
            <button @click="flag = 'son2'" :class="{select: flag==='son2'}">组件2</button>
        </div>
        <!-- 普通组件引用
        <son1 />
        <son2 /> -->

        <!-- 动态组件引用
        <component :is="flag" /> -->

        <!-- 刷新页面就没有保存组件高亮的状态了 -->
        <!-- 想刷新页面也保持高亮，用本地存储=>localstorage, sessionstorage -->
        <!-- include: 指定组件缓存 多个用,隔开 include="son1, son2"
        <keep-alive include="son1">
            <component :is="flag" />
        </keep-alive> -->

        <!-- exclude: 指定组件不缓存 多个用,隔开 exclude="son1, son2" -->
        <keep-alive exclude="son1">
            <component :is="flag" />
        </keep-alive>
        
         <!-- 动态组件缓存 默认为包裹的组件都被缓存-->
        <!-- <keep-alive>
            <component :is="flag" />
        </keep-alive> -->
    </div>
</template>
<script>
import son1 from './son1'
export default {
    name: 'TrendComponent',
    components: {
        son1,
        son2: ()=>import('./son2') //异步加载组件，也叫按需加载
    },
    data(){
        return {
            title: '',
            flag: 'son1'
        }
    },
    methods: {
    }
}
</script>
<style scoped>
.select{
    background: yellow
}
</style>