let nome = document.getElementById('nome')
let email = document.getElementById('email')
let username = document.getElementById('username')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

const buscarUsuario=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            nome.innerText=input.name
            email.innerText=data[0].email
            username.innerText=data[0].username
    })
    .catch((err)=>{
        nome.innerText = "quebrou"
        email.innerText= "quebrou"
        username.innerText= "quebrou"
    })
}

btn.addEventListener('click',()=>{
    buscarUsuario()
})