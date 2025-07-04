let mounth = prompt("Insira o número de um dos primeiros meses do ano:")

switch(mounth){
    case 1: alert("Esse é o mês de janeiro"); break
    case 2: alert("Esse é o mês de fevereiro"); break
    case 3: alert("Esse é o mês de Março"); break
    default: alert("Insira um número válido")
}

let userProfile = prompt("Qual sua função no site?")

switch(userProfile){
    case "admin": alert("Bem vindo dev!"); break
    case "editor": alert("Bem vindo Editor! Você terá acesso limitado"); break
    case "visitante": alert("Bem vindo leitor, saia!"); break
    default: alert("Insira admin, editor ou visitante")
} 

let n1 = prompt("Insira primeiro número")
let n2 = prompt("Insira segundo número")
let propriedade = "+"

switch(propriedade){
    case "+": alert(n1 + n2);break
    case "-": alert(n1 - n2);break
    case "*": alert(n1 * n2);break
    case "/": alert(n1 / n2);break
    default: alert("Insira números")
}