var a = 5,
    b;
// --a 运算符在前面先运算 a-- 运算符在后面先赋值
b = --a + a--  //(8,3)
//console.log(b,a)

//undefined,NaN,'',0,false,null 都是false 其余都是 true

let t1 = 1 && 2 && undefined && 10  //遇到真往后走，遇到假或者走到最后返回当前的值  t1 = undefined

let t2 = 0 || null || 1 || undefined //遇到假往后走，遇到真或者走到最后返回当前的值  t2 = 1
//console.log(t1,t2)

for(let i = 0;i;i++){
    console.log(i);  //死循环，条件一直为真
}
for(let i = 0;i;i++){
    i = 0;//break  将条件设置为false
}

typeof(typeof(undefined)) //string


//显示类型转换
let str = '123';
let num = Number(str);
console.log(num);

