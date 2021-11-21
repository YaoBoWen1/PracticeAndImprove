<template>
    <div>
        <h3>作用域插槽</h3>
        <slot :data="data">
            <div>slot3插槽内容</div>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'slot3',
    data(){
        return {
            data: ['昨天','今天','明天']
        }
    },
    methods: {
    }
}
</script>
<style scoped>

</style>