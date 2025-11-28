//📌 Task 1: Validate Empty Fields

//Create a form with name and email.
//If any field is empty → show an alert “All fields are required”
// function fun(){
// let name=document.querySelector('#name').value
// let email=document.querySelector('#email').value
// if(name=="" || email==""){
//     alert("all field are required")
//     if(name==""){
//          document.querySelector('#name').focus()
//     }
//     else if(email==""){
//          document.querySelector('#email').focus()
//     }
   
//     return false
// }

// }
//======================================================================

// 📌 Task 2: Show Entered Data Below the Form

// Form → Name, Age
// When the user clicks submit → display:

// 👉 "Hello Qasim, your age is 22"

// function fun1(){
//     let name=document.querySelector('#name').value
// let age=document.querySelector('#age').value
//     if(name=="" ||age==""){
//     alert("all field are required")
//     if(name==""){
//          document.querySelector('#name').focus()
//     }
//     else if(age==""){
//          document.querySelector('#age').focus()
//     }
//     return false
   
  

// }


// document.querySelector('#display').textContent=(`hello ${name},your age is${age}`)
// return false
// }
//============================================================================================
//📌 Task 3: Validate Email Format

//Form → Email
//If email does NOT include @ or .com → show error message.
function fun2(){
    let email=document.querySelector('#email').value
if(!(email.includes("@") || email.includes(".com"))){
    alert("plzz enter valid email")
    email.querySelector('#email').focous()
    return false


}
}









