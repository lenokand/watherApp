const API_KEY = '8c93761f0cfd02f56a37c775dc01adf7'
const PLACE = 'Donetsk'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${PLACE}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        renderWidget(data)
    })
    .catch(err => {
        console.error(err)
    })

function renderWidget(data) {
    const widgetContainer = document.querySelector('.weatherWidget')
    let content = `
            <div class="weatherWidget-header">
                <div class="weatherWidget-header__place">
                    Donetsk
                </div>
                <button class="weatherWidget-header__reload">
                    <img src="./weather-widget/img/_refresh.svg" alt="reload weather">
                </button>
            </div>
            <div class="weatherWidget-body">
                <img src="http://openweathermap.org/img/wn/10d@4x.png" alt="">
                <div class="weatherWidget-body__info">
                    <div class="weatherWidget-body__info-temp">
                        15&deg;C
                    </div>
                    <div class="weatherWidget-body__info-status">
                        <h2>Clear</h2>
                        <h4>clear sky</h4>
                    </div>
                    <div class="weatherWidget-body__info-date">
                        Mar
                        <div>31</div>
                    </div>
                </div>
            </div>
            <div class="weatherWidget-footer">
                <div class="weatherWidget-footer__wind">
                    <img src="./weather-widget/img/_arrow.svg" alt="wind direction">
                    <span>5m/s</span>
                </div>
                <div class="weatherWidget-footer__wind">
                    <img src="./weather-widget/img/_teardrop.svg" alt="humidity">
                    <span>50%</span>
                </div>
                <div class="weatherWidget-footer__wind">
                    Real feel: <span>13&deg;C</span>
                </div>
            </div>`
    widgetContainer.innerHTML = content
}