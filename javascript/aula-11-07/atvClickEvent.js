let textChange = document.getElementById('textChange')
let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    textChange.innerText = 'texto alterado com sucesso!'
})

let colorChange = document.getElementById('colorChange')
let btnColor = document.getElementById('btnColor')

btnColor.addEventListener('click', function(){
    colorChange.style.backgroundColor= 'yellow'
})