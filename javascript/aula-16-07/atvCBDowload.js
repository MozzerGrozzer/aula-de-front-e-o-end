function baixarArquivo(callback){
    console.log("Baixando arquivo...📂")

    setTimeout(()=>{
        console.log("Dowload Concluído! ✅")
        callback()
    },4000)
}

const abrirAqruivo = () => console.log("Abrindo Arquivo... 🐑")

baixarArquivo(abrirAqruivo)
