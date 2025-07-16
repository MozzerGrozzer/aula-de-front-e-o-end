// const verificarResultado = new Promise((resolve, reject)=>{
//     let result = 1 + 1

//     if(result == 2){
//         resolve("certo")
//     }else{
//         reject("saia")
//     }
// })

// verificarResultado
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// esse é o jeito mais completo de fazer um callback, usando promises (resolve, reject etc)

const buscarUsuario = new Promise ((resolve, reject) => {
    console.log('buscando usuário no banco...')
    setInterval.timeout(()=>{
        const encontrado = true
        if(encontrado){
            resolve({
                nome:'gatos',
                email: 'email@email.com',
                idade: 20
            })
        } else {
            reject("Usuário não encontrado")
        }
    }, 2000)
})

buscarUsuario
    .then((res)=>{
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })