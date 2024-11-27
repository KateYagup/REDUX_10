
import React from 'react';
import Header from './Header';
import { users } from './user-context';


class App extends React.Component {
    state = {
        user: {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001',
        }
    }

    render() {
        return <div className='page'>
            <Header value={this.constex.state.user} />
        </div>
    }
};

export default App;
