function carregarProduto(callback){
    console.log('produto carregado')
    setTimeout(()=>{
        console.log('Produto carregado com sucesso')
        callback()
    },1000)
}

const show=() =>{console.log("exibindo detalhes...")}

carregarProduto(show)