<template>
    <div>
        <h1>过滤器</h1>
        <input type="text" v-model="input">
        <div>{{ input | number(3)}}</div>
        <div>-------分隔符------</div>
        <input type="text" v-model="classStyle">
        <div :class="classStyle | classFilter">{{classStyle | classFilter}}</div>
    </div>
</template>
<script>
export default {
    name: 'FilterDemo',
    props:{

    },
    data(){
        return {
            input: 0,
            classStyle: ''
        }
    },
    filters:{
        // filters分为全局和局部定义，此处是局部定义
        // 用于:v-bind和 {{}}
        number(data, n){
            return parseInt(data).toFixed(n)
        },
        classFilter(data){
            console.log(data)
            return data === 'a' ? 'classStyle' : 'noClassStyle'
        }
    }
}
</script>
<style scoped>
.classStyle{
    color: brown;
}
</style>