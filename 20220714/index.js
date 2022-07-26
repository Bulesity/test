//声明函数会提升，声明变量会提升，赋值变量不会提升，
//函数提升比变量提升大

//console.log(a) ;//打印的是a函数



// var a = 1;
// function a(){
//     console.log(1)
// }

//暗示全局变量
//a = 1;//此时a挂载在window对象下面
//console.log(window.a)//1

// function test(){
//     var a = b = 1;//先把1赋值给b 再把b的值赋值给声明的a变量，
//                   //由于b没有在函数内部声明而直接赋值，
//                   //b会被提升为全局变量，挂载在window下面
// }
// test();
// console.log(b);//1



// function test(a){
//     console.log(a);
//     var a = 1;
//     function a(){

//     }
//     console.log(a)
// }
// test(2)

var a = false + 1 // 1 隐式类型转换 false->0 true->1  ' '->true


window.a || (window.a = '1');//返回 '1' 先执行括号的运算，在执行或运算
