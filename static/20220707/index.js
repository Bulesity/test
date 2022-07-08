console.log('我来了，20220707！！')

// const test = new  Function('a','b','c','console.log(a + b + c)')
// test(1,2,3)

// 字符串转成表达式
let t1 = Function('console.log("ti")')
console.log(t1)
let str = `function anonymous(
    ) {
    console.log("ti")
    }`;
eval(`!${str}()`);