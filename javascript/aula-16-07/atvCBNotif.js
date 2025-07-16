function enviarNotificacao(callback){
    console.log('mensagem digitada')
    setTimeout(()=>{
        console.log("enviando mensagem")
        callback()
    },1500)
}

const confirm=()=>{console.log('Mensagem enviada com sucesso!')}

enviarNotificacao(confirm)