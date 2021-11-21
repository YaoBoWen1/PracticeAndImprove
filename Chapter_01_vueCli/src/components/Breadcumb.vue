<template>
    <div class="flex jcs">
        <div>首页</div>
        <div v-for="(item,index) in list" :key="index">／{{item.meta.title}}</div>
    </div>
</template>
<script>
export default {
    name: 'Breadcumb',
    data(){
        return {
            list: []
        }
    },
    watch:{
        '$route'(to, from){
            console.log(to, from)
            this.list = to.matched
        }
    },
    mounted(){
        // console.log(this.$route)
    },
    methods: {
    }
}
</script>
<style scoped>
.flex{
    display: flex;
}
.jcs{
    justify-content: start;
}
</style>