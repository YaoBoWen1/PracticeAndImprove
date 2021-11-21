let MIXIN = {
    data() {
        return {
            name: 'mixin',
            params: 'mixin里的字段'
        }
    },
    created(){
        console.log('我是mixin里的')
    },
    methods: {
        test(){
            console.log('mixin里的方法')
        },
        minTest(){
            console.log('mixin里的minTest方法')
        }
    }
}
export default MIXIN