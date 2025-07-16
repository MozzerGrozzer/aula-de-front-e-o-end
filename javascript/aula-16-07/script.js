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

// function pedirComida(callback){
//     console.log('pedido feito, aguarde...')
//     setTimeout(() => {
//         console.log("pedido pronto!🍕")
//         callback()
//     }),2000
// }

// function comer(){
//     console.log("yummers")
// }

// pedirComida(comer)

// const pizzaChegou = false
// const chegou = () =>{console.log("a pizza chegou")}
// const cancelado = () => {console.log("damn")}
    
// const pedido = (callbackSuccess, callbackError) => {
//     if(pizzaChegou == true)
//         {callbackSuccess()
//         }else{
//             callbackError()
//         }
// }

// pedido(chegou,cancelado)

// const pizza = false
// const pedido = new Promise((resolve,reject)=>{
//     if(pizza==true){
//         console.log("a pizza chegou")
//     } else {
//         console.log("damn")
//     }
// })

// const buscarUsuario = new Promise()=>{}