// usar "for" quando saber quantas vezes algo vai se repoetir
// while é para vezes não especificas aparentemente elas não podem dar muliplos passos
// let i = 1
// while(i<=5){
//     console.log(`número: ${i}`)
//     i++
// }

// let senha = "abc"
// let senhaDigitada = prompt("Coloque senha")

// while(senhaDigitada != senha){
//     alert("Senha incorreta")
//     senhaDigitada=prompt("Informe sua senha:")
// }

//funções resolvem problemas específicos
// function nome (){}

// function dizerOla (){
//     console.log("Olá")
// }

// dizerOla()

// function boarsVindas (){
//     console.log("Seja bem-vindo")
// }

// boarsVindas()
// função sem parametros parenteses vazias"()""
// function fazerSuco(){console.log("fazendo suco de laranja!")}

// fazerSuco()

// function fazerSuco(suco){
//     console.log(`fazendo suco de ${suco}`)
// }

// fazerSuco("Uva")
// fazerSuco("morango")

// let n1 = 25
// let n2 = 19
// let result = n1 + n2
// console.log(result)

// let n3 = 10
// let n4 = 51
// let result2 = n3 + n4
// console.log(result2)

// let n5 = 1
// let n6 = 29
// let result3 = n5 + n6
// console.log(result3)

// function somar(p1,p2){
//     console.log(`Resultado é  ${p1 + p2}`)
// }

// somar(29,5)

//função anonima é uma função sem nome

// console.log("Saia")

// setTimeout(function(){
//     console.log("saia agora")
// }, 2000)

// return é um valor que será utilizado depois, ela guarda o resultado prévio

// function dobro(numero){
//     return numero * 2
// }

// let result = dobro(2)
// console.log(result)

// function quadrado(numero){
//     return numero * numero
// }

// console.log(quadrado(4))

// arrow function (moderna)

const dobrar = (numero) => {
    console.log(numero * 2) 
}

dobrar(10)