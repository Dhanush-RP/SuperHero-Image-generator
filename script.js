

const getSuperHero = (userToken,characterCode) => {
    fetch(`https://www.superheroapi.com/api.php/${userToken}/${characterCode}`).then(response => response.json()).then(json=>generateResult(json))}

    const getSearchedSuperHero = (userToken,characterName)=> {
        fetch(`https://www.superheroapi.com/api.php/${userToken}/${characterName}`).then(response => response.json()).then(json=>
        {
        const searchToken = json.results[0]    //because it will generate multiple results and we need only one of them
        generateResult(searchToken)
        })
    }

    const generateResult = (json) => {
        document.getElementById('imageDiv').innerHTML = `<img src = "${json.image.url}" width=  600 height=600 />`
        name.innerText = `${json.name}`
        stats.innerHTML = `${getStats(json)}`
    }

const getStats = (link) =>
{
    const string = Object.keys(link.powerstats).map(stat=> `<p>${stat.toUpperCase()} : ${link.powerstats[stat]} </p>`)
    return string.join(' ')
    //console.log(string.join(' '))
}
const userToken = 2047794488760585
const newHeroButton = document.getElementById('getNewHeroButton')
const search = document.getElementById('searchButton')
const input = document.getElementById('getInput')
const name = document.getElementById('heroName')
const stats = document.getElementById('heroStats')

const getCharacterCode = () => Math.ceil(Math.random()*731)
 newHeroButton.onclick = () => 
 {
    getSuperHero(userToken , getCharacterCode())
 }

search.onclick = () =>
{
    const characterCode = `search/${input.value}`
    getSearchedSuperHero(userToken,characterCode)
}



