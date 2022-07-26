//原型链的终点是 Object.prototype  下面有一个toString()方法


//父类的引用值属性可以修改（Object,Array）,原始值不能修改（string,number,boolea）



// function Car(){
//     this.brand = 'Benz';
// }
// console.log(Car.prototype)
// Car.prototype = {
//     brand:'Mazda',
//     intro:function(){
//         console.log(` i am ${this.brand}`);
//     }
// }
// console.log(Car.prototype)
// var car = new Car()
// car.intro()  //Benz  this 指向Car本身 Car本身就有brand属性 所以就不会去原型上找 直接用自己的属性 


// function Person(){
//     this.smoke = function(){
//         this.weight --;
//     }
// }
// Person.prototype = {  //Person 的原型 也就是说 Person 继承 这个对象{weight:130}
//     weight:130
// }
// var person = new Person();
// console.log(person,Person)


// function Obj(){}
// Obj.prototype.num = 1;
// var obj1 = Object.create(Obj.prototype);
// var obj2 = new Obj();
// console.log(obj1,obj2);


//Object.create(null);不继承于Object.prototype


//原始值没有属性，可以用toString() 是包装类的作用
var num = 1;
num.toString();//num = new Number(num)


//call/apply  更改this指向
function Car(brand,color){
    this.brand = brand;
    this.color = color;  
}
var newCar = {};
//Car.call(newCar,'Benz','red');  //将Car构造函数中的this 指向newCar对象
Car.apply(newCar,['Benz','red']);

//console.log(newCar);


function Compute(){
    this.puls = function(a,b){
       console.log(a + b);
    }
    this.min = function(a,b){
        console.log(a - b);
     }
}

function FullCompute(){
    Compute.apply(this);
    this.mul = function(a,b){
       console.log(a * b);
    }
    this.div = function(a,b){
        console.log(a / b);
     }
}
var fullcompute = new FullCompute();
fullcompute.puls(1,3);
