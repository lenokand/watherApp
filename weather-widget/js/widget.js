const API_KEY = '8c93761f0cfd02f56a37c775dc01adf7'
const PLACE = 'Donetsk'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${PLACE}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderWidget(data)
    })
    .catch(err => {
        console.error(err)
    })

function renderWidget(data) {
    const widgetContainer = document.querySelector('.weatherWidget')
    const now = new Date()
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let content = `
            <div class="weatherWidget-header">
                <div class="weatherWidget-header__place">
                    ${data.name}
                </div>
                <button class="weatherWidget-header__reload">
                    <img src="weather-widget/img/_refresh.svg" alt="reload weather">
                </button>
            </div>
            <div class="weatherWidget-body">
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">
                <div class="weatherWidget-body__info">
                    <div class="weatherWidget-body__info-temp">
                        ${Math.round(data.main.temp)}&deg;C
                    </div>
                    <div class="weatherWidget-body__info-status">
                        <h2>${data.weather[0].main}</h2>
                        <h4>${data.weather[0].description}</h4>
                    </div>
                    <div class="weatherWidget-body__info-date">
                        ${monthArray[now.getMonth()]}
                        <div>${now.getDate()}</div>
                    </div>
                </div>
            </div>
            <div class="weatherWidget-footer">
                <div class="weatherWidget-footer__wind">
                    <img src="weather-widget/img/_arrow.svg" alt="wind direction" style="transform: rotate(${data.wind.deg}deg)">
                    <span>${data.wind.speed}m/s</span>
                </div>
                <div class="weatherWidget-footer__wind">
                    <img src="weather-widget/img/teardrop.svg" alt="humidity">
                    <span>${Math.round(data.main.humidity)}%</span>
                </div>
                <div class="weatherWidget-footer__wind">
                    Real feel: <span>${Math.round(data.main.feels_like)}&deg;C</span>
                </div>
            </div>`
    widgetContainer.innerHTML = content
}