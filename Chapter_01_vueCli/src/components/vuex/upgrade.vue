<template>
    <div>
        <h4>进阶版本的写法</h4>
        <div class="flex jcs aic">
            <div>{{`名字: ${name}`}}</div>
            <button class="mgl20" @click="CHANGE({data:'我改成识域啦'})">修改名字</button>
            <button class="mgl20" @click="changeAgain({data:'谁要买小米！'})">我还想改名字</button>
            <button class="mgl20" @click="changeName('到底是谁要买小米！')">mutation改名字</button>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'upgrade',
    data(){
        return {
        }
    },
    computed:{
        ...mapState(['name'])
    },
    methods: {
        ...mapMutations(['changeName']),  //将 `this.changeName('到底是谁要买小米！')` 映射为 `this.$store.commit('changeName', '到底是谁要买小米！')`
        ...mapActions(['CHANGE', 'changeAgain']) //将 `this.changeAgain({data:'谁要买小米！'})` 映射为 `this.$store.dispatch('changeAgain', {data:'谁要买小米！'})`
    }
}
</script>
<style scoped>
.flex{display: flex;}
.jcs{justify-content: flex-start;}
.aic{align-items: center;}
.mgl20{margin-left: 20px;}
</style>