<template>
    <div>
        <h3>sontofather</h3>
        <btn1 @action="action"></btn1>
        <btn2 :action1="action1" @child="acceptSon"></btn2>
        <btn4 :action="action2"></btn4>
        <btn3 :parentTitle.sync="title"></btn3>{{title}}
    </div>
</template>
<script>
import btn1 from './btn1'
import btn2 from './btn2'
import btn3 from './btn3'
export default {
    name: 'Sontofather',
    data(){
        return {
            title: '父默认值'
        }
    },
    components:{
        btn1,
        btn2,
        btn3,
        'btn4': ()=>import('./btn4.vue') 
    },

    methods: {
        action(e){
            console.log(e)
        },
        action1(){
            console.log('父的值')
        },
        action2(res){
            console.log(res)
            console.log('我也是父的值')
        },
        acceptSon(res){
            res()
        }
    }
}
</script>
<style scoped>

</style>