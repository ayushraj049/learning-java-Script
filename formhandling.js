// function handle(){
//     let num1=parseInt(document.querySelector('#num1').value)
//     let num2=parseInt(document.querySelector('#num2').value)
//     alert(num1+num2)

// }
//=================================================================
// function handle(){
//     let num1=parseInt(document.querySelector('#num1').value)
//     let num2=parseInt(document.querySelector('#num2').value)
//     document.querySelector('#res').innerHTML=num1+num2
//     return false

// }
//=================================================================
//create a form of 5 fields and print the data below the form
function handlesubmit(){
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value
    let num3=document.getElementById('num3').value
    let num4=document.getElementById('num4').value
    let num5=document.getElementById('num5').value
    document.querySelector('#res').innerHTML=num1
    document.querySelector('#res1').innerHTML=num2
    document.querySelector('#res2').innerHTML=num3
    document.querySelector('#res3').innerHTML=num4
    document.querySelector('#res4').innerHTML=num5
    return false
}  
      


