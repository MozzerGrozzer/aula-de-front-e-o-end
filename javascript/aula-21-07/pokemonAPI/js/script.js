let pokemon_image = document.getElementById('pokemon_image')
let pokemon_number = document.getElementById('pokemon_number')
let pokemon_name = document.getElementById('pokemon_name')
let input_search = document.getElementById('input_search')
let btn_search = document.getElementById('btn_search')
let btnPrev = document.getElementById('btnPrev')
let btnNext = document.getElementById('btnNext')

const searchFunction=(pokemon)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res)=>res.json())
        .then((data)=>{
            console.log(data.name)
            console.log(data.id)
            console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)

            searchFunction()=(data.id)

            pokemon_image.src=data.sprites.versions["generation-v"]["black-white"].animated.front_default
            pokemon_name.innerText=data.name
            pokemon_number.innerText=data.id
        })
        .catch((err)=>{
            // pokemon_image.src="err"
            // pokemon_image.alt="err"
            pokemon_name.innerText="Não encontrado"
            // pokemon_number.innerText="err"
        })
}

btn_search.addEventListener("click",(event)=>{
    searchFunction(input_search.value)
    event.preventDefault()
})

btnNext.addEventListener('click',(event)=>{
    let currentNumber = parseInt(pokemon_number.innerText,10)
    let nextNumber = currentNumber + 1
    input_search.value = nextNumber
    searchFunction(nextNumber)
    event.preventDefault()
})

btnPrev.addEventListener('click',(event)=>{
    let currentNumber = parseInt(pokemon_number.innerText,10)
    let previousNumber = currentNumber - 1
    input_search.value = previousNumber
    searchFunction(previousNumber)
    event.preventDefault()
})