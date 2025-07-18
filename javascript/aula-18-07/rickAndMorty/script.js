let name = document.getElementById('name')
let species = document.getElementById('species')
let img = document.getElementById('img')
let btn = document.getElementById('btn')

const searchCharacter=()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results[0])
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].image)

        name.innerText=data.results[0].name
        species.innerText=data.results[0].species
        img.src=data.results[0].image
    })
    .catch((err)=>{
        name.innerText="Quebbro"
        species.innerText="Quebrou"
        img.alt="quebrou" // para modificar o alt
    })
}

btn.addEventListener('click',()=>{
    searchCharacter()
})