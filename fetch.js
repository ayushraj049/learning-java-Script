async function acessdata(){
    let apidata=await fetch('https://jsonplaceholder.typicode.com/comments')
    let resdata=await apidata.json()
    //console.log(resdata)
    // let em=resdata.map((e)=>{return e.email})
    // console.log(em);
    let finaldata=resdata.map((e)=>`
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
    </tr>

    
`).join("")
document.querySelector('#showdata').innerHTML=finaldata






}
    
acessdata()