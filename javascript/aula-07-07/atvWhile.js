let i = 1

while(i <= 10){
    console.log(i)
    i++
}

let o = 2
while(o <=20){console.log(o);o=o+2}

let p = 50
while(p>=0){console.log(p);p--}

let senha = "admin"
let senhaDigitada = prompt("Digitar a senha:")

while(senhaDigitada!=senha){alert("Saia"); senhaDigitada=prompt("Digitar a senha:")}
if (senhaDigitada == senha){alert("Bem Vindo")}