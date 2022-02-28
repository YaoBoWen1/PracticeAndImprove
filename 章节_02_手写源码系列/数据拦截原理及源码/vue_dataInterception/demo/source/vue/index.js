console.log('vue begin............')
import {initState} from './observe'
function Vue(options){
    this._init(options)
    console.log(this,111)
}

Vue.prototype._init = function (options) { 
    let vm = this
    console.log(this,222)
    vm.$options = options

    //初始化
    initState(vm)
}
export default Vue
