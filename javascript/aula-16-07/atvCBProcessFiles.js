function processarDados(callback){
    console.log('Procesando dados...')
    setTimeout(() => {
        console.log('Dados Processados!')
        callback()}
    ),2000
}

function show(){console.log('Mostrando resultados...')}

processarDados(show)