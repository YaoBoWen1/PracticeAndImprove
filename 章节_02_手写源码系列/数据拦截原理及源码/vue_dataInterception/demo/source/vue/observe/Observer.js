import {observer} from './index';
import {arrayMethods} from './array'

// data->对象数据 定义响应属性 进行数据拦截
export function defineReactive(data, key, value){
    // 若value是一个对象进行递归
    if(typeof value === 'object'){
        observer(value)//如果是对象，最终指向下面的Observer类
    }
    // 监听到data上有动态添加的key，进行自定义处理
    Object.defineProperty(data, key, {
        get(){
            console.log('get.....')
            return value
        },
        set(newValue){
            console.log('set.....')
            if(newValue === value) return
            value = newValue
        }
    })
}

// 观察类
class Observer {
    constructor(data){
        // 若是数组 就修改它的原型 用于原生方法的拦截
        if(Array.isArray(data)){
            data.__proto__ = arrayMethods
        }
        this.walk(data)
    }
    walk(data){
        for (let key in data) {
            // 属性 => 响应式
            let value = data[key]
            defineReactive(data, key, value)//监听/劫持/自定义操作
        }
        // let keys = Object.keys(data)
        // for (let i = 0; i < keys.length; i++) {
        //     let key = keys[i]
        //     let value = data[key]
        //     // 属性 => 响应式
        //     defineReactive(data, key, value)
        // }
    }
}
export default Observer