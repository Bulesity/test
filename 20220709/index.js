
//JS 基本数据类型 Number String boolean undifine null
var a = [1,2,3]; //引用地址
var b = a;
a.push(5);//修改引用地址里面的值
a = [1,2,3,4];//指向一个新的引用的地址 
document.writ(b,a);