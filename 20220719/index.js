var fn = (
   function test1(){
     return 1
   },
   function test2(){
     return '2'
   }
)();
//console.log(typeof(fn));  //string

var a = 10;
if(function b(){}){   //(function b(){}) 表达式中的函数声明，忽略函数名称
    a += typeof(b);
}
console.log(a);//10undefined