import { WEATHER_DATA_RECIEVED } from './weather.actions';

const initialData = {
    weatherData: [
        // { "id": "1", "temperature": 34, "name": "Moenhaven" },
        // { "id": "2", "temperature": 65, "name": "O'Haraside" },
        // { "id": "3", "temperature": 5, "name": "South Gladyceport" },
        // { "id": "4", "temperature": 25, "name": "Lake Elwinchester" },
        // { "id": "5", "temperature": 60, "name": "New Ruby" },
        // { "id": "6", "temperature": 10, "name": "South Sydniemouth" },
        // { "id": "7", "temperature": 87, "name": "West Tyrel" }

    ]
}

const weatherReducer = (state = initialData, action) => {
    switch (action.type) {
        case WEATHER_DATA_RECIEVED: {
            return {
                ...state,
                weatherData: action.payload.weatherData,
            }
        }
        default:
            return state;
    }
}

export default weatherReducer;