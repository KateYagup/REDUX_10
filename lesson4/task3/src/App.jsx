import React from "react";
import { Provider } from 'react-redux';
// import Counter from './Counter';
// import Users from "./users/Users";
import store from './store';
import UsersList from './users/UsersList';
import Pagination from "./users/Pagination";

const App = () => {
    return (
        <div>
            <Pagination />
            <Provider store={store}>
                <UsersList />
            </Provider>
        </div >
    )
}

export default App;
