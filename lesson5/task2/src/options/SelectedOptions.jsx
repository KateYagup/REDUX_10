import { connect } from 'react-redux';
import { selectedOptionsSlector } from "./options.selectors";
import Options from "./Options";

const mapState = state => {
    return {
        options: selectedOptionsSlector(state)
    }
}

export default connect(mapState)(Options);