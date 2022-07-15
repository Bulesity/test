/*
* 1.形参和变量声明
* 2.实参值赋值给形参
* 3.寻找函数声明
* 4.执行函数
*/
console.log(test()); // 2
function test(){
    a = 1;
    function a(){}
    var a = 2
    return a
}
//AO = {
//     a:undefined->function a(){}->1->2
// }