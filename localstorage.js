//local storage........
localStorage.setItem("name","sagar")
localStorage.setItem("city","bhopal")
//data acess krne ke liye..........
let username=localStorage.getItem("name")
document.write(username)
//ek ko remove krna ha................
localStorage.removeItem("city")
//sara delelte krna  ha to......
// localStorage.clear()
//object ko store krne ka tarika
let person={
    name:"adarsh",
    age:23,
    city:"bhopal",
    clg:"oist"
}
localStorage.setItem("userdata",JSON.stringify(person))
let newobj=JSON.parse(localStorage.getItem("userdata"))
console.log(newobj.name)



