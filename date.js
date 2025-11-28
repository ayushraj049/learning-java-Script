let today=new Date()
console.log(today);
console.log(today.getFullYear())
console.log(today.getDate())
console.log(today.getMonth()+1)
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())
setInterval(()=>{
    let time=new Date()
    let currenttime=time.toLocaleTimeString()
    document.querySelector('#res').innerHTML=currenttime
    res.style.color="red"
},1000)



