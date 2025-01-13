import React from "react";

const WeatherItem = ({ event }) => {
    return (
        <li className="city">
            <span className="city__name">{event.name}</span>
            <span className="city__temperature">{event.temperature} F</span>
        </li>
    )
}

export default WeatherItem;