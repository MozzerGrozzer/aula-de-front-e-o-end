let input_cep=document.getElementById('input_cep')
let btn_cep=document.getElementById('btn_cep')

let logradouro=document.getElementById('logradouro')
let bairro=document.getElementById('bairro')
let regiao=document.getElementById('regiao')
let estado=document.getElementById('estado')

const submitCEP=(cep)=>{
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        logradouro.innerText=data.logradouro
        bairro.innerText=data.bairro
        regiao.innerText=data.regiao
        estado.innerText=data.estado
    })
    .catch((err)=>{
        logradouro.innerText="informação não encontrada"
        bairro.innerText="informação não encontrada"
        regiao.innerText="informação não encontrada"
        estado.innerText="informação não encontrada"
    })

}

btn_cep.addEventListener('click',(event)=>{
    submitCEP(input_cep.value)
    event.preventDefault()
})