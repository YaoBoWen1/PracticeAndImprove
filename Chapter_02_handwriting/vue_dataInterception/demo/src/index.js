import Vue from 'vue'

let vm  = new Vue({
    el: '#app',
    data:{
        msg: 'hello',
        father:{
            name: 'jack'
        },
        arr:[1,2,3]
    }
})

// console.log('msg',vm._data.msg)
// console.log('msg',vm.msg)
// vm.msg = 1222
// console.log('msg',vm.msg)

/*
有两级，Object.defineProperty监听不到
可用递归 或者 es6新增proxy
本demo采用递归
*/
// console.log('name',vm.father.name)
// vm.father.name = 'fffff'
// console.log('name',vm.father.name)

// 拦截数组的原生方法，进行自定义修改
vm.arr.push('xsss')
// vm.arr[3].name = 'ccc'

// vm.arr.push({name:'cc'})
// vm.arr[3].name = 'ccc'