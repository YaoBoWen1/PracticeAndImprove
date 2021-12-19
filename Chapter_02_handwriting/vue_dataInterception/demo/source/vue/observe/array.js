import {defineReactive} from './Observer'
// 把原生方法重构
// 在原生的方法外面包一层，在调用的时候添加判断，若是对象则健康

let oldArrayMethod = Array.prototype
// 把原型复制一份 Object.create复制的比较干净
export let arrayMethods = Object.create(oldArrayMethod)

// 需要拦截的原生方法
let methods = [
    'push','shift','pop','unshift','reverse','sort','splice'
]
methods.forEach(m => {
    // 重构原来的方法
    arrayMethods[m] = function(...args){
        console.log('拦截数组方法,进行自定义操作')
        // 调用原生方法
        let res = oldArrayMethod[m].apply(this,args)

        let inserted
        switch (m) {
            //新增
            case 'push':
            case 'unshift':   
                inserted = args
                break;
            case 'splice':
                // inserted = args.splice(2) //取新增的内容
                break;
            default:
                break;
        }
        if(inserted){
            //inserted是args
            defineReactive(this, this.length -1, inserted[0])
            console.log('数据拦截'+inserted,inserted[0],this)
        }
        return res
    }
});