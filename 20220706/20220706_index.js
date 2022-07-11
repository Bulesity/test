//好好学习第一天c
console.log('我来了！！！')


//题目一，执行下面条件里的语句
//1.通过对象比较的toString()方法
// let a = {
//     _default:0,
//     toString:function(){
//         return  ++ this._default 
//     }
// }
// if(a == 1 && a == 2 && a ==3){
//     console.log("You\'re win!!")
// }
//进阶 
//2.通过getter方法，就是在访问变量时进行变量修改
let _default = 0;
Object.defineProperty(window,'a',{
    get(){
        return ++ _default
    }
})
if(a === 1 && a === 2 && a === 3){
    console.log("You\'re win!!")
}
//2
let len = ({} + {}).length   //类型转换 toString方法 30 [object object][object object]
let len1= ([] + []) //[].length = 0  0 数组有自己的toString()方法
let len2 = (function(){}).length // 形参个数 0 


function formatDataTree(data){
    let _data = JSON.parse(JSON.stringify(data))
    return _data.filter(p=>{
        const _arr = _data.filter(c=>c.pid == p.id);//找到P下面的所有的C
        _arr.length && (p.children = _arr)
        return p.pid === 0
    })
}
