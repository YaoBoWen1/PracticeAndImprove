
import Observer from './Observer';

export function initState(vm){
    let opts = vm.$options
    if(opts.data){
        initData(vm)
    }
}
function initData(vm){
    let data = vm.$options.data
    // data可能为{} 或 function
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}

    /*
    data为对象的前提下
    此处只为vm._data.msg变成vm.msg
    */
    for (let key in data) {
        proxy(vm, '_data', key)
    }
    /*
    此处为数据监听
    ps:和上面的代码好像
    */
    observer(vm._data)
}

export function observer(data){
    if(typeof data !== 'object' || data == null){
        return
    }
    // 如果是对象就监听
    return new Observer(data)
}

//在vm实例上动态添加所有属性 get: vm.msg => vm._data.msg   set: vm.msg = 1 => vm._data.msg = 1
function proxy(vm, source, key){
    Object.defineProperty(vm, key, {
        get(){
            return vm[source][key]
        },
        set(newValue){
            vm[source][key] = newValue
        }
    })
}