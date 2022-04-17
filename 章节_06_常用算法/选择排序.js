/*
    冒泡排序：取一个值和整个数组比较，较小的放前面
    具体思路：
    第一种方法
      设定一个temp数组
      两层遍历
      第一层固定循环次数（循环次数为原数组的长度）
      第二层每次循环取arr数组最小值，该值放到temp数组，同时删除arr数组的这个值
      继续循环取arr数组最小值，同上
    第二种方式
     设定最小值索引，temp临时数据
     两层遍历
     第一层第一次循环拿一个值 和 第二层的每一个值去比较，拿到小值索引
     根据索引交换值
     开始第二层的第二次循环，同上

*/
const arr = [12, 8, 24, 16, 1]; // 1 8 12 16 24
const arrLength = arr.length
// 取最小值
// console.log(Math.min.apply(null,arr))
// console.log(Math.min.apply(this,arr))
// console.log(Math.min(...arr))

const temp = []
for (let i = 0; i < arrLength; i++) {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j] === Math.min(...arr)){
      temp.push(Math.min(...arr))
      arr.splice(j,1)
    }
  }
}
console.log(temp)

const arr2 = [12, 8, 24, 16, 1]; // 1 8 12 16 24
// 第二种方法
let min, tempData
for (let i = 0; i < arr2.length-1; i++) {
  min = i
  for (let j = i+1; j < arr2.length; j++) { //此处j=0是错误的，因为已经交换过的小值又参与比较了
    if(arr2[j] < arr2[min]){
      min = j
    }
  }
  //交换位置
  temp = arr2[i]
  arr2[i] = arr2[min]
  arr2[min] = temp
}
console.log(arr2)