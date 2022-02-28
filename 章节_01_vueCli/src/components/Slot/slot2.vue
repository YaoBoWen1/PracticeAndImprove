<template>
    <div>
        <h3>具名插槽</h3>
        <slot name="second">
            <div>slot2插槽内容</div>
        </slot>
    </div>
</template>
<script>
export default {
    name: 'slot2',
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