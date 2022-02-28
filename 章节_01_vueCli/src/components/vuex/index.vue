<template>
    <div>
        <h2>vue区域</h2>
        <h4>基础版本的写法</h4>
        <div class="flex jcs aic">
            <div>{{`名字: ${$store.state.name}`}}</div>
            <button class="mgl20" @click="baseChange">修改名字</button>
        </div>
        <div>－－－－－－－－－－－－－分割线－－－－－－－－－－－－－</div>
        <upgrade />
    </div>
</template>
<script>
import upgrade from './upgrade'
export default {
    name: 'Vuex',
    components:{upgrade},
    data(){
        return {
        }
    },
    watch:{

    },
    mounted(){
    },
    methods: {
        baseChange(){
            // 客户 产品经理(dispatch => actions) 开发(commit => mutations) 产品

            // 常规操作 产品经理通知开发修改
            // 1)载荷形式分发
            this.$store.dispatch('CHANGE',{data:'我改成识域啦'})
            // 2)对象形式分发
            // this.$store.dispatch({
            //     type: 'CHANGE',
            //     data: '我改成识域啦'
            // })

            // 产品经理直接改产品
            // 载荷形式
            // this.$store.commit('changeName', '我改成识域啦')
            //对象形式
            // this.$store.commit({
            //     type: 'changeName',
            //     data: '我改成识域啦' //注意这边还有个data层
            // })
        }
    }
}
</script>
<style scoped>
.flex{display: flex;}
.jcs{justify-content: flex-start;}
.aic{align-items: center;}
.mgl20{margin-left: 20px;}
</style>