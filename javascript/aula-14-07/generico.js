// function pedirComida(){
//     console.log("Pedindo comida")
// }

// function comendoComida(){
//     console.log("comendo comida")
// }

// pedirComida()
// comendoComida()

function sabor(p){
    console.log(`o sabor é: ${p}`)
}

sabor("mussarela")

function assarPizza(callback){
    setTimeout(() => {
        console.log("🍕pizza pronta!")
        callback()
    }, 2000);
}

function comerPizza(){
    console.log("Comendo a pizza")
}

console.log("Preparando a Pizza")
assarPizza(comerPizza)
