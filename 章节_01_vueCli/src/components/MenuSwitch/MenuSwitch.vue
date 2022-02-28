<template>
    <div>
        <h3>内部页面模拟菜单切换</h3>
        <div class="flex jcs">
            <div class="left">
                <div>
                    <router-link to="/menuSwitch/menuSwitchFirst">公务员</router-link>
                </div>
                <div>
                    <router-link to="/menuSwitch/menuSwitchSecond">程序员</router-link>
                </div>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MenuSwitch',
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
.flex{
    display: flex;
}
.jcsb{
    justify-content: space-between;
}
</style>