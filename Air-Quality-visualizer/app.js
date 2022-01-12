(() => {
    const KEY = 'b4c054bf-4bf0-45e8-87ad-4d7fd5484271';

    async function getAirQuality({ city, state, country}){
        const response = await fetch(
            `http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
        );
        const { data:{ current} } = await response.json();
        const { pollution, weather } = current;
        return {
            aqi: pollution.aqius,
            temperature: weather.tp,
            humidity: weather.hu,
            wind: weather.ws
        } 
    }

    function displayAirQuality({ city, state, country, aqi, temperature, wind, humidity}){
        const cityElem = document.querySelector('.city');
        const stateCountry = document.querySelector('.state-country');
        const aqiElem = document.querySelector('.aqi > h1');
        const temperatureElem = document.querySelector('.temperature');
        const humidityElem = document.querySelector('.humidity');
        const windElem = document.querySelector('.wind');

        cityElem.innerHTML = city;
        stateCountry.innerHTML = `${state}, ${country}`;
        aqiElem.innerHTML = aqi;
        temperatureElem.innerHTML = `Temp: ${temperature}°`;
        humidityElem.innerHTML = `Humidity: ${humidity}%`;
        windElem.innerHTML = `Wind: ${wind} km/h`
    }

    function setAirqualityColor(aqi){
        if (aqi <= 50) {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--good-aqi-color)'
            );
        } else if (aqi <= 100) {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--medium-aqi-color)'
            );
        }else {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--bad-aqi-color)'
            );
        }
    }

    async function run (){
        const city = 'Bangkok';
        const state = 'Bangkok';
        const country = 'Thailand';

        const { aqi, temperature, humidity, wind } = await getAirQuality({ city, state, country});

        displayAirQuality({
            city,
            state,
            country,
            aqi,
            temperature,
            humidity,
            wind
        });

        setAirqualityColor(aqi);
    }
    run();
})();