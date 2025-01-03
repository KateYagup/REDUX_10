import React from 'react';
// import AvailableOptions from './AvailableOptions';
// import SelectedOptions from './SelectedOptions';
import Options from './Options';

const TransferList = () => {
    return (
        <div className='transfer-list'>
            {/* <AvailableOptions title="Available option" /> */}
            {/* <SelectedOptions title="Selected option" /> */}
            <Options title='Available List' />
            <Options title='Selected List' />
        </div>
    )
}

export default TransferList;