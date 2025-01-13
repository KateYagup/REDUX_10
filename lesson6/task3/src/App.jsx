import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import Weather from './weather/Weather';
import store from './store';
// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

const App = () => {
    // const [events, setEvents] = useState([]);
    // const fetchTasksList = () => {
    //     fetch(baseUrl).then(res => res.json())
    //         .then(taskList => {
    //             setEvents(taskList);
    //             // console.log(events);
    //         });
    // }

    // Конец загрузки данных с сервера
    // console.log(events);
    // useEffect(() => {
    //     fetchTasksList();
    // }, []);


    return (
        <Provider store={store}>
            <Weather />
        </Provider>
    );
}

export default App;
