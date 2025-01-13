import React from "react";
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherListSelector } from './weather.selectors';
import WeatherItem from "./WeatherItem";

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

const Weather = ({ events }) => {

    return (
        <main className="weather">
            <h1 class="weather__title">Weather data</h1>
            <ul class="cities-list">
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


export default connect(mapState)(Weather);