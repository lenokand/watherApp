const API_KEY = '8c93761f0cfd02f56a37c775dc01adf7'
const PLACE = 'Donetsk'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${PLACE}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })

