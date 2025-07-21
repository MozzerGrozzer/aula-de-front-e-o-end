let personagensContainer = document.getElementById('personagens-container')

fetch('https://dragonball-api.com/api/characters')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        // console.log(data.items[0])
        // console.log(data.items[0].name)
        // console.log(data.items[0].gender)
        // console.log(data.items[0].race)
        // console.log(data.items[0].image)

        data.items.forEach(element=> {
            const card = document.createElement("div")
            card.className="card"
            card.innerHTML=`
                <img src="${element.image}"/>
                <h2>${element.name}</h2>
                <p>raça: ${element.race}</p>
                <p>gênero: ${element.gender}</p>
            `
            personagensContainer.appendChild(card)
        })
    })
    .catch((err)=>{
        //bleh
    })