<template>
    <div>
        <h3>兄弟组件传值思路</h3>
        <div>大儿子传值给父，父接受值，传给小儿子</div>
        <div>子孙越多，越费事</div>
        <div>以上，vuex脱颖而出</div>
    </div>
</template>
<script>
export default {
    name: 'Fathertoson',
    data(){
        return {
            title: ''
        }
    },
    methods: {
    }
}
</script>
<style scoped>

</style>