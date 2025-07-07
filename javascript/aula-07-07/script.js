// usar "for" quando saber quantas vezes algo vai se repoetir
// while é para vezes não especificas aparentemente elas não podem dar muliplos passos
// let i = 1
// while(i<=5){
//     console.log(`número: ${i}`)
//     i++
// }

let senha = "abc"
let senhaDigitada = prompt("Coloque senha")

while(senhaDigitada != senha){
    alert("Senha incorreta")
    senhaDigitada=prompt("Informe sua senha:")
}