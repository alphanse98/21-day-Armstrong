let a = parseInt(prompt())
let t = 0
b = a
while(a > 0){
    last = a % 10
    a = a - last
    a = a / 10
    last = last*last*last
    t = t + last
}
if(t === b){
    console.log(b,"is a armstrong number")
}else{
   console.log(b,"is not a armstrong number") 
}







