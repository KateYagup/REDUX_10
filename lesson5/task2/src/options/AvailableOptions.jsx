import { connect } from 'react-redux';
import { availabeOptionsSlector } from "./options.selectors";
import Options from "./Options";

const mapState = state => {
    return {
        options: availabeOptionsSlector(state)
    }
}

export default connect(mapState)(Options);