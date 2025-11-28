// function validate(){
//     let name=document.querySelector('#name').value
//     let age=document.querySelector('#age').value
//     if(name==""){
//         alert("fill ur name")
   //     document.querySelector('#name').focus()
//          return false
//     }
//    else if(isNaN(age)){
//     alert("plz fill in no")
//     document.querySelector('#name').focus()
//     return false
        
//     )


//}
   
// }
///================================================================================
//create five form using validation

function validate(){

     let name=document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let clg=document.querySelector('#class').value
    let email=document.querySelector('#email').value
    let phone=document.querySelector('#phone').value
    let password=document.querySelector('#password').value
     let cpassword=document.querySelector('#cpassword').value
    
    
    if(name==""){
       alert("fill ur name")
       document.querySelector('#name').focus()
         return false
    }

     else if(isNaN(age)){
       alert("fill ur age!")
       document.querySelector('#age').focus()
         return false
    }

     else if(clg==""){
       alert("fill ur clg")
       document.querySelector('#class').focus()
         return false
    }


    else if(!(email.includes("@gmail.com"))){
       alert("fill ur valid email")
       document.querySelector('#email').focus()
         return false
    }
   else if(phone.length>10 || phone.length<10){
      alert("fill valid phone no")
      document.querySelector('#phone').focus()
      return false
    }
    else if(!(password.match(/[~`!@#$%^&*]/))){
      alert("plz enter one special character")
      document.querySelector('#password').focus()
      return false
    }
    else if(password!=cpassword){
      alert("renetr ur password")
      document.querySelector('#cpassword').focus()
      return false

    }

}