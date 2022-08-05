function Car(brand,color,displacement){
   this.brand = brand;
   this.color = color;
   this.displacement = displacement;
   this.info = function(){
     return this.brand + '的' + this.displacement + '的' + this.color + '的车';
   }
}
function Person(opt){
    Car.apply(this,[opt.brand,opt.color,opt.displacement]);
    this.name = opt.name;
    this.age = opt.age;
    this.say = function(){
       console.log(this.name + this.info());
    }
}
let p = new Person({
    name:'张三',
    brand:'Benz',
    color:'red',
    displacement:'3T',
    age:30
})
//p.say();


//链式处理
let chain = {
    way1:function(){
        console.log('way1');
        return this;
    },
    way2:function(){
        console.log('way2');
        return this;
    },
    way3:function(){
        console.log('way3');
        return this;
    },
    way4:function(){
        console.log('way4');
        return this;
    },
    way5:function(){
        console.log('way5');
        return this;
    },
}
//chain.way1().way2().way3().way4().way5();


//hasOwnProperty 排除非自身的属性（原型上的属性）
// let a = {age:36};
// Object.prototype.name = '张三';
// for(let key in a){
//     if(a.hasOwnProperty(key)){
//         console.log(a[key],'sssssss');  
//     }
//     console.log(a[key]);  
// }


//判断变量是不是数组的方法
let brr = [];


//instanceof
//console.log(brr instanceof Array);

//判断构造函数
//console.log(brr.constructor)

//原型底层的Object的toSring();   值为 '[object Array]'
//console.log(Object.prototype.toString.call(brr));

if(Object.prototype.toString.call(brr) == '[object Array]'){
   // console.log('是数组')
}


//callee和caller

//arguments.callee 指向函数本身

function test(){
    console.log(arguments.callee);
}


var sum = (function(n){
    if(n <= 1){
        return 1
    }
    return n + arguments.callee( n - 1)
}(10))
//console.log(sum)




//题目
let obj = {}
function foot(){
  bar.apply(null,arguments)
}
function bar(){
    console.log(arguments);
}
//函数执行过程  foot() -> foot.call();
foot(1, 2, 3, 4, 5);//bar.apply(null,[1, 2, 3, 4, 5])->bar(1, 2, 3, 4, 5) -> [1, 2, 3, 4, 5]



//typeof 可以返回那些值
// object(null)/string/boolean/function/number/undefine


//形参和arguments是一一对应的 任何一个有变化另一个也会变化


var f = (
    function f(){
        return '1';
    },
    function g(){
        return 2;
    }
);
typeof(f);//function g()
var f1 = (
    function f(){
        return '1';
    },
    function g(){
        return 2;
    }
)();
typeof(f2);//function g()() -> 2 -> number


//NaN != NaN  引用值之间的比较 是比较存储地址










