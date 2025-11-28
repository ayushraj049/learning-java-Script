// let person={
//     name:"prince",age:23,city:"bhopal"
// }
// console.log(person.age)
// //koi v value add kr skte h
// person.email="kashyapyuvraj149@gmail.com"
// //value ko edit krna ha
// ================================================
//user se input leke objext me value me dale
// let emp={emp_name:"",emp_age:"",emp_contact:""}
// emp.emp_name=prompt("enter name")
// emp.emp_age=prompt("enter age")
// emp.emp_contact=prompt("enter contact")
// console.log(emp)
// for(let k in emp){
//     console.log(emp[k])//isse value print hoga na ki keys agr key print krana ho to bs k ko orint kr  denge

//}
//=========================================================
// let k=Object.keys(person)//array me store ho jaega
// console.log(k[0]);
// let v=objective.values(person)
// console.log(v)
//============================================================
//object ke aandar object ha iske access kaise kre 
// let store={
//     stname:"kirana store",
//     weekincome:[12000,100,200,30,10,2],
//     franchaise:{
//         first:"lal ghati",
//         second:"indo"
//     }
// }
// console.log(store.weekincome[1])
// console.log(store.franchaise.second)
//=============================================================================
//array of object using map function
// let students=[
//     {
//         stname :"deepak",
//         stage:23
//     },
//     {
//         stname:"aniket",
//         stage:24
//     },
//     {
//         stname:"subh",
//         stage:45
//     },
//     {
//         stname:"adarsh",
//         stage:56

//     }
// ]
// console.log(students);
// let newAr=students.map((e)=>{return e.stage})
// console.log(newAr)
//=========================================================================
// //filter function
// let newstage=students.filter((e)=>{return e.stage>=24 && e.stage<=56})
// console.log(newstage)
//============================================================================================
// //question
// let store=[
//     {
//         storename:"store1",
//         location:"indp",
//         revenue:25
//     },
//      {
//         storename:"store2",
//         location:"mpnagar",
//         revenue:20
//     },
//      {
//         storename:"store3",
//         location:"vishal",
//         revenue:19
//     },
//      {
//         storename:"cybrom",
//         location:"indp",
//         revenue:28
//     },
//      {
//         storename:"shreyans",
//         location:"mpnagar",
//         revenue:21
//     }
// ]
// let newstage=store.filter((e)=>{return e.location=="indp" && e.revenue>=10})
// console.log(newstage)
//=====================================================================================



