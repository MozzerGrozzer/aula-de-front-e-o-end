let nome = document.getElementById('nome')
let email = document.getElementById('email')
let username = document.getElementById('username')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        console.log(data) // toda vez que trabalhar em API dar console.log(data) para encontrar objetos específicos
    })