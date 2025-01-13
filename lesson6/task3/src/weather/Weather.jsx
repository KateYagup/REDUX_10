import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { getWeatherData } from './weather.actions';
import { weatherListSelector } from './weather.selectors';
import WeatherItem from "./WeatherItem";

const Weather = ({ events, getWeatherData }) => {
    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {events.map(event => (
                    <WeatherItem event={event} />
                ))}
            </ul >
        </main>
    )
}


const mapState = state => {
    return {
        events: weatherListSelector(state)
    }
}

const mapDispatch = {
    getWeatherData: weatherActions.getWeatherData,
}


export default connect(mapState, mapDispatch)(Weather);