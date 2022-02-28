<template>
    <div>
        <h3>Slot</h3>
        <!-- 匿名插槽 -->
        <slot1>
            父组件内容
        </slot1>
        <!-- 具名插槽 -->
        <slot2>
            <div  slot="second">
            父组件内容
            </div>
        </slot2>
        <!-- 作用域插槽 -->
        <slot3>
            <div slot-scope="user">
            父组件内容
                <ul>
                    <li v-for="item in user.data" :key="item">{{item}}</li>
                </ul>
            </div>
            <!-- <template slot-scope="user">
            父组件内容
                <ul>
                    <li v-for="item in user.data" :key="item">{{item}}</li>
                </ul>
            </template> -->
        </slot3>
    </div>
</template>
<script>
import slot1 from "./slot1";
import slot2 from "./slot2";
import slot3 from "./slot3";
export default {
    name: 'SlotContent',
    components:{
        slot1,
        slot2,
        slot3
    },
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