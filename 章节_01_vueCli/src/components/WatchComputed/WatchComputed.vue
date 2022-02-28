<template>
    <div>
        <h3>计算属性区域</h3>
        <!-- 计算属性其实就是定义一个有返回值的方法，实时监听多个data值的变化, 进行处理并且返回 -->
        <!-- 依赖的数据发生改变，才会触发计算属性 -->
        <!-- 依赖的值没有改变，计算属性会取缓存的值 -->
        <!-- @input="btn1"让testPrice计算属性的set方法被调用 -->
        <!-- <input type="text" placeholder="" v-model="price1" @input="btn1"/> -->
        <input type="text" placeholder="" v-model="price1" />
        <input type="text" placeholder="" v-model="price2" />
        <div>合计：{{totalPrice}}</div>
        <!-- <div>传参合计：{{totalPrice(1)}}</div> -->
        <div>原始写法:{{testPrice}}</div>

        
        <h3>监听属性区域</h3>
        <input type="text" placeholder="" v-model="play" />
    </div>
</template>
<script>
export default {
    name: 'Watch-computed',
    data(){
        return {
            price1: 0,
            price2: 0,
            obj:{
                name: '张三'
            },
            play: '篮球'
        }
    },
    computed:{
        totalPrice(){
            return Number(this.price1) + Number(this.price2)
        },
        // totalPrice(){
        //     // 计算属性参数传递
        //     return function (i) {
        //         return i + Number(this.price1) + Number(this.price2)
        //     }
        // },
        testPrice: {
            // 当计算属性修改时会先触发set方法
            // 读取属性触发get方法
            // 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：
            get:function () {
                console.log('get')
                return this.price1
            },
            set: function (val) {
                console.log('set')
                return this.price1 = val
            }
        }
    },
    watch:{
        // 第一种
        play(){
            console.log('监听到' + this.obj.name + '打' + this.play)
        },
        // 第二种
        // 监听对象的某一个值
        'obj.name'(){
            console.log('监听到' + this.obj.name + '打' + this.play)
        },
        // 第三种
        // 直接监听对象，任意一个改变都触发
        obj:{
            handler(curVal, oldVal){
                console.log(curVal, oldVal)
            },
            deep:true //深度监听
        },
        // 第四种
        example: 'test' //methods 里的方法名
    },
    methods: {
        btn1(){
            this.testPrice = 6
        }
    }
}
</script>
<style scoped>

</style>