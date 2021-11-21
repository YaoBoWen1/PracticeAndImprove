<template>
    <div>
        <button @click="send">{{title}}</button>
    </div>
</template>
<script>
export default {
    name: 'btn1',
    props:{
        title: {
            type: String,
            default: '父操作子-传函数'
        },
        action: Function
    },
    data(){
        return{

        }
    },
    methods:{
        send(){
            console.log('子组件111')
            this.action(222)
        }
    }
}
</script>
