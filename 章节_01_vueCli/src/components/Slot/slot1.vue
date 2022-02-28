<template>
    <div>
        <h3>匿名插槽</h3>
        <slot>
            <div>slot1插槽内容</div>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'slot1',
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>
<style scoped>

</style>