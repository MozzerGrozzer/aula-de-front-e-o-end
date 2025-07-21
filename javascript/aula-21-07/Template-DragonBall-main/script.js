let personagensContainer = document.getElementById('personagensContainer')

fetch('https://dragonball-api.com/api-docs')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    })