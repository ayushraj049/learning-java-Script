let math=parseInt(prompt("enter maths marks"))
let science=parseInt(prompt("enter science marks"))
let eng=parseInt(prompt("enter english marks"))
let hindi=parseInt(prompt("enter hindi marks"))
let sst=parseInt(prompt("enter sst marks"))
let computer=parseInt(prompt("enter computer marks"))
let avg=(math+science+eng+hindi+sst+computer)/5
if(avg>90 && avg<=100){
    console.log("grade=A")
}
else if(avg>80 && avg<=90){

    console.log("grade=B")
}
 else if(avg>70 && avg<=80){
    console.log("grade=C")
}
 else if(avg>60 && avg<=70){
    console.log("grade=D")
}
 else if(avg>50 && avg<=60){
    console.log("grade=D")
}
else{
    console.log("fail")
}