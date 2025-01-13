export const WEATHER_DATA_RECIEVED = 'WEATHER_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => {
    return {
        type: WEATHER_DATA_RECIEVED,
        payload: {
            weatherData
        }
    }
}

export const getWeatherData = (weatherURL) => {
    return function (dispatch) {
        fetch(weatherURL)
            .then(weatherData => {
                dispatch(weatherDataRecieved(weatherData));
            })
        // console.log('I am async action');
    }
}