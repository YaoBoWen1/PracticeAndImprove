<template>
    <div>
        <h4>子组件1: {{randNum}}</h4>
        
    </div>
</template>
<script>
export default {
    name: 'son1',
    data(){
        return {
            title: '',
            randNum: Math.random(0,1)
        }
    },
    methods: {
    }
}
</script>
<style scoped>

</style>