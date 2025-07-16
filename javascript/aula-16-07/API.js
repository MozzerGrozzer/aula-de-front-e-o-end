let nome = document.getElementById('nome')
let email = document.getElementById('email')
let username = document.getElementById('username')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        console.log(data[2]) // toda vez que trabalhar em API dar console.log(data) para encontrar objetos específicos
        nome.innerText = data[2].name
        email.innerText=data[2].email 
        username.innerText=data[2].username 
    },)