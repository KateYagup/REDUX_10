import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapSate = state => {
    return {
        options: selectedOptionsSelector(state),
    }
}

const mapDispatch = {
    moveOption: toggleOption,
}

export default connect(mapSate, mapDispatch)(Options);