import React from "react";
import { Provider } from 'react-redux';
import TransferList from './options/TransferList';
import store from './store';

const App = () => {
    return (
        <div>
            {/* <Provider store={store}> */}
            <TransferList />
            {/* </Provider> */}
        </div >
    )
}

export default App;
