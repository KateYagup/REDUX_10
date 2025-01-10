import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class SearchField extends Component {
    state = {
        userName: '',
    }

    onChange = event => {
        this.setState({ userName: event.target.value });
    }

    handleUserSearch = () => {
        this.props.showSpinner;
    }

    render() {
        return (
            <div class="name-form">
                <input
                    type="text"
                    class="name-form__input"
                    value={this.state.userName}
                    onChange={this.onChange}
                />
                <button
                    class="name-form__btn btn"
                    onClick={this.handleUserSearch}
                >
                    Show
                </button>
            </div>
        )
    }
}

const mapDispatch = {
    showSpinner: usersActions.showSpinner,
};

export default connect(null, mapDispatch)(SearchField);