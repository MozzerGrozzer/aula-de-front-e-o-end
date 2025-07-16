// function fazerAlgo(callback){
//     setTimeout(()=>{
//         console.log("iniciando")
//         callback()
//         console.log("finalizando...")
//     }, 2000)
// }

// function minhaCallback() {
//     console.log("Executando Callback")
// }

// fazerAlgo(minhaCallback)

//  callback garante que quando algo estiver completo o código irá continuar

function pedirComida(callback){
    console.log('pedido feito, aguarde...')
    setTimeout(() => {
        console.log("pedido pronto!🍕")
        callback()
    }),2000
}

function comer(){
    console.log("yummers")
}

pedirComida(comer)