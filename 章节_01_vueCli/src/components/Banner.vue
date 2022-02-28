<template>
    <div>
        <h3>右侧内容区域</h3>
        <div v-for="(item,index) in imgs" :key="index">
            <img :src="item" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    props:['imgs'],
    data(){
        return {

        }
    },
    created(){

    },
    methods: {

    }
}
</script>
<style scoped>

</style>