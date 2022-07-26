//prototype
//console.log(HandPhone.prototype);
//原型prototype其实是function对象的一个属性，也是一个对象


// function HandPhone(color,brand){
//     this.color = color;
//     this.brand = brand;
//     this.screen = '18:9';
//     this.system = 'Android';
// }

// HandPhone.prototype.rom = '64G';
// HandPhone.prototype.ram = '6G';
// HandPhone.prototype.screen = '16:9';
// HandPhone.prototype.call = function(){
//     return 'i am calling'
// }

// var hp1 = new HandPhone('red','小米'),
//     hp2 = new HandPhone('black','华为');
// console.log(hp1.rom,hp2.ram);//64G ,6G

// console.log(hp1.screen,hp2.screen);//18:9  自己有的属性，取自己的属性，取不到的取原型上的属性
//prototype 是定义构造函数造出的每个对象的公告祖先；所有被构造函数
//构造出来的对象都可以继承原型上的属性和方法


//function Test(){}
// var test = new Test();
// Test.prototype.name = '张三';

// console.log(Test.prototype,test.name)


//constructor 指向构造函数本身  Test 可以更改

// Test.prototype.constructor = HandPhone
// console.log(Test.prototype);


//一个加减乘除插件
;(function(){
    function Compute(num1,num2){
      this.num1 = num1;
      this.num2 = num2;
    }
    Compute.prototype = {
        puls:function(){         
            if(isNaN(this.num1*1) || isNaN(this.num2*1)){
                alert("请输入数字!")
                return
            }
            return this.num1*1 + this.num2*1
        },
        sub:function(){
            if(isNaN(this.num1*1) || isNaN(this.num2*1)){
                alert("请输入数字!")
                return
            }
            return this.num1*1 - this.num2*1
        },
        mul:function(){
            if(isNaN(this.num1*1) || isNaN(this.num2*1)){
                alert("请输入数字!")
                return
            }
            return this.num1*1 * this.num2*1
        },
        div:function(){
            if(isNaN(this.num1*1) || isNaN(this.num2*1)){
                alert("请输入数字!")
                return
            }
            return this.num1*1 / this.num2*1
        }
    }
    window.Compute = Compute;
}());

// var compute = new Compute('ad',3);
// compute.puls();


