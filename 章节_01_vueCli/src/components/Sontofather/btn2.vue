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
            default: '子操作父'
        },
        action1: Function
    },
    data(){
        return{

        }
    },
    methods:{
        send(){
            this.$emit('child', this.action1)//子操作父的方法。把父的方法传入到子处理
        }
    }
}
</script>
