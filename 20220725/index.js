//继承，圣杯模式，A继承B的原型，但是改变A的原型，B的原型不受影响
function Teacher(){};
Teacher.prototype.mSkill = 'JS';
function Student(){
    this.pSkill = 'HTML'
};
function Buffer(){};
Buffer.prototype = Teacher.prototype;
Student.prototype = new Buffer()

Student.prototype.name = '张三';
var t = new Teacher();
var s = new Student();
console.log(s,t);





// function inherit(Target,Origin){
//     function Buffer(){};
//     Buffer.prototype = Origin.prototype;
//     Target.prototype = new Buffer();
//     Target.prototype.constructor = Target;//构造器指向本身
//     Target.prototype.super_class = Origin;//继承源为Origin
// }


//模块化开发，独立的名称空间
var inherit = (function(){
    var Buffer = function(){};
    return function(Target,Origin){
        Buffer.prototype = Origin.prototype;
        Target.prototype = new Buffer();
        Target.prototype.constructor = Target;//构造器指向本身
        Target.prototype.super_class = Origin;//继承源为Origin
    }
}());