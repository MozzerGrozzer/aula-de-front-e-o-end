let advice = document.getElementById('advice')
let conselhoGerado=document.getElementById('conselhoGerado')
let conselho=document.getElementById('conselho')

const conselhoPress=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.slip.advice)
        conselhoGerado.innerText=data.slip.advice
    })
    .catch((err)=>{conselhoGerado.innerText='saia'})
}


conselho.addEventListener('click',(event)=>{
    conselhoPress()
    event.preventDefault()
})