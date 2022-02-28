<template>
    <div>
        <h3>Mixin混入区域-Two</h3>
    </div>
</template>
<script>
import mixin from './m'
export default {
    name: 'two',
    mixins: [mixin],
    data(){
        return {
            params: '组件里的字段'
        }
    },
    created(){
        console.log('我是组件里的')
        console.log('params: ',this.params)
        this.test()
        this.minTest()
    },
    methods: {
        test(){
            console.log('组件里的方法')
        }
    }
}
</script>
<style scoped>

</style>