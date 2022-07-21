//闭包
// function test1(){
//     function test2(){
//         var b = 2;
//         a = 2;
//         console.log(a);
//     }
//     var a = 1;
//     return test2();
// }
// var c = 3;
// var test3 = test1();

//立即执行函数 IIFE
// (function(){
//     console.log('ssss')
// })();
// (function(a,b){
//     console.log(a + b);
// }(1,2));//W3C建议写法


// var num = (function(a,b){
//     return a + b;
// }(1,2));

//函数声明变成函数表达式的方法 在函数 function 前 加 + - ！ && || 
// -function add(){
//    console.log(8)
// }();
//var i 可以生成闭包 let i 没有生成闭包
function test(){
    var arr = []
    for(let i = 0;i<10;i++){
        arr[i] = function(){
            document.write(i + '</br>')
        }
    }
    console.log(i)
    return arr
}

var myArr = test()
for(let j in myArr){
    myArr[j]();
}