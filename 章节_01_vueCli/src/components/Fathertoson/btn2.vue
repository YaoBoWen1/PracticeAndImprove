<template>
    <div>
        <button>{{title}}</button>
    </div>
</template>
<script>
export default {
    name: 'btn2',
    props:{
        title: {
            type: String,
            default: '父操作子-通过ref'
        },
        action: Function
    },
    data(){
        return{
            name: 'btn2组件',
            btn: 'btn111'
        }
    },
    methods:{
        send(){
            console.log('bt2-send方法')
        }
    }
}
</script>
