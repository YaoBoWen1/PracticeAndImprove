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
            default: '子操作父－修饰符'
        }
    },
    data(){
        return{

        }
    },
    methods:{
        send(){
            this.$emit('update:parentTitle', '子给父传的值')//子操作父的方法。把父的方法传入到子处理
        }
    }
}
</script>
