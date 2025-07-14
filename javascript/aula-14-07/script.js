let titulo = document.getElementById('titulo')

// titulo.innerText = "olá!"
// titulo.style.backgroundColor = "red"

let btn = document.getElementById('btn')

// btn.addEventListener("click", function(){
//     titulo.innerText = "saia"
//     titulo.style.backgroundColor = "red"
// })

// btn.addEventListener("mouseover", function() { // mouseout é a mesma coisa diferença é apenas que ativa quando sai
//     titulo.innerText = "saia"
// })

// btn.addEventListener("mouseover", function(){
//     titulo.style.backgroundColor = "red"
//     titulo.style.color = "white"
// })
// btn.addEventListener("mouseout", function(){
//     titulo.style.backgroundColor = "green"
//     titulo.style.color = "black"
// })

document.addEventListener("keydown", function(event){
    if(event.key == "r"){titulo.innerText="red"}
        else if (event.key == "g"){titulo.innerText="green"}
            else if (event.key == "b"){titulo.innerText="blue"}
                else{titulo.innerText="none"}
})