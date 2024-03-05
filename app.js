var num1 = +prompt("enter 1st number")

if(num1.toString().charCodeAt(0)>= 48 && num1.toString().charCodeAt(0) <= 57){
// document.write("data shi h")   
var operator = prompt("enter operator")
if(operator=="+" ){
var num2 = +prompt("enter 2nd number")
var result = num1+num2
document.write("a + b is "+ result)
}

else if(operator=="-"){
    var num2 = +prompt("enter 2nd number")
    var result = num1-num2
    document.write("a - b is "+ result)
}
else if(operator=="*"){
    var num2 = +prompt("enter 2nd number")
    var result = num1*num2
    document.write("a * b is "+ result)
}
else if(operator=="/"){
    var num2 = +prompt("enter 2nd number")
    var result = num1/num2
    document.write("a / b is "+ result)
}
else{
    document.write("operator shi enter kro ")
}
}


else{
    document.write("data correct kr lo bhai")
}