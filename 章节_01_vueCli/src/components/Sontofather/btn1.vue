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
            default: '子给父传值-$emit'
        }
    },
    data(){
        return{

        }
    },
    methods:{
        send(){
            this.$emit('action', '子给父传的值')//发射器，发射一个事件
        }
    }
}
</script>
