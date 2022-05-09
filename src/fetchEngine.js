const fetchData = require("./fetchData")
const API = "https://rickandmortyapi.com/api/character/"
const myArray = []

async function engine (url_api) {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(API + data.results[0].id)
        myArray.push(character.name)
        console.log(myArray)

    } catch (error) {
        console.error(error)
    }
}

engine(API)
console.log(myArray)



