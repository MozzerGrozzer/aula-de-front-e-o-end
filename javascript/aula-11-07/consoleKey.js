let titulo = document.getElementById("titulo")
document.addEventListener('keydown',function (event){
    switch(event.key){
        case "ArrowUp": titulo.innerText = "seta pressionada cima"; break
        case "ArrowDown": titulo.innerText = "seta pressionada baixo"; break
        case "ArrowLeft": titulo.innerText = "seta pressionada esqueda"; break
        case "ArrowRight": titulo.innerText = "seta pressionada direita"; break
    }
})