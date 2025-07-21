let input_cep=document.getElementById('input_cep')
let btn_cep=document.getElementById('btn_cep')

let logradouro=document.getElementById('logradouro')
let bairro=document.getElementById('bairro')
let regiao=document.getElementById('regiao')
let estado=document.getElementById('estado')

const buscandoCEP=(cep)=>{
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())
    .then((data)=>{
        logradouro.innerText=data.logradouro
        bairro.innerText=data.bairro
        regiao.innerText=data.regiao
        estado.innerText=data.estado
    })
    .catch((err)=>{
        logradouro.innerText="Insira informação que existe"
        bairro.innerText="Insira informação que existe"
        regiao.innerText="Insira informação que existe"
        estado.innerText="Adoro gatos"
    })
}

btn_cep.addEventListener('click',(event)=>{
    buscandoCEP(input_cep.value)
    event.preventDefault()
})