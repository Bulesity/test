//求函数实参和
function sum(){
    let a = 0;
    for(let i in arguments){
        a += arguments[i];
    }
    return a;
}
let v = sum(1,2,3);
console.log(v)
function test(a,b){
    b = 3
  console.log(a + arguments[1])
}
test(1)