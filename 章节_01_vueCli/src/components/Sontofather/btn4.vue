<template>
    <div>
        <button @click="send">{{title}}</button>
    </div>
</template>
<script>
export default {
    name: 'btn4',
    props:{
        title: {
            type: String,
            default: '子操作父－单纯回调'
        },
        action: Function
    },
    data(){
        return{

        }
    },
    methods:{
        send(){
            this.action('子的值11223344')
        }
    }
}
</script>
