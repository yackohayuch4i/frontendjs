const cityInput = document.querySelector('.inputCity');
const searchBtn = document.querySelector('.searchButton');

const weatherInfoSection = document.querySelector('.weatherInfo');
const notFoundSection = document.querySelector('.notFound');
const searchCitySection = document.querySelector('.searchCity');

//
const countryTxt = document.querySelector('.countryTxt');
const tempTxt= document.querySelector('.tempTxt');
const conditionTxt = document.querySelector('.conditionTxt');
const humidityValueTxt = document.querySelector('.humidityValueTxt');
const windValueTxt = document.querySelector('.windValueTxt');
const weatherSummaryImg = document.querySelector('.weatherSummaryImg');
const currentDateTxt = document.querySelector('.currentDateTxt');

const forecastItemContainer = document.querySelector('.forecastItemContainer');

const apiKey = '0451b82230c9f8f4e0e21771a40e9ae8';

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})

cityInput.addEventListener('keydown' , (event) => {
    if (event.key == 'Enter' && 
        cityInput.value.trim() != ''
    ) {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})

async function getFetchData(endPoint , city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}$units=metric`

    const response = await fetch(apiUrl);
    return response.json();
}

function getWeatherIcon(id) {
    if (id <= 232) return 'thunderstorm.png';
    if (id <= 321) return 'cloudly.png';
    if (id <= 531) return 'snowy.png';
    if (id <= 622) return 'snowy.png';
    if (id <= 781) return 'thunderstorm.png';
    if (id <= 800) return 'sunny.png';
    else return 'partlySunny.png';
}

function getCurrentDate() {
    const currentDate = new Date()
    const options = {
        weekday: 'short',
        day: '2-digit',
        mounth: 'short'
    }

    return currentDate.toLocaleDateString('en-GB' , options)
}

async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('weather' , city);

    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection);
        return;
    }

    const {
        name: country,
        main: { temp , humidity},
        weather: [{ id , main}],
        wind: {speed}
    } = weatherData

    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp) + '℃';
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = humidity + '%';
    windValueTxt.textContent = speed + 'm/s';

    weatherSummaryImg = `assests/weather/${getWeatherIcon(id)}`

    await updateForecastsInfo(city)
    showDisplaySection(weatherInfoSection);
}

async function updateForecastsInfo(city) {
    const forecastsData = await getFetchData('forecasts' , city);

    const timeTaken = '12:00:00';
    const todayDate = new Date().toISOString().split('T')[0];

    forecastItemContainer.innerHTML = ''
    forecastsData.list.forEach(forecastWeather => {
        if(forecastWeather.dt_txt.includes(timeTaken) && 
           !forecastsData.dt_txt.includes(todayDate)){
            updateForecastItem(forecastWeather);
        }
    })
}

function updateForecastItem(weatherData) {
    console.log(weatherData);
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData

    const dateTaken = new Date(date);
    const dateOption = {
        day: '2-digit',
        mounth: 'short',
    }

    const dateResult = dateTaken.toLocaleDateString('en-US' , dateOption)

    const forecastItem = `
        <div class="forecastItem">
            <h5 class="forecastItemDate regularTxt">${dateResult}</h5>
            <img src="assests/weather/${getWeatherIcon(id)}" class="forecastItemImg">
            <h5 class="forecastItemTemp">${Math.round(temp)} ℃</h5>
        </div>
    `

    forecastItemContainer.insertAdjacentHTML('beforeend' , forecastItem)
}
function showDisplaySection(section) {
    [weatherInfoSection , notFoundSection , searchCitySection]
        .forEach(section => section.style.display = 'none')

    section.style.display = 'flex'
}