import React from 'react'
import { Toast } from 'react-bootstrap';
function LocationDenied({errorMsg}) {

    return (
        <Toast>
            <Toast.Body><strong>{errorMsg}</strong></Toast.Body>
        </Toast>);

}

export default React.memo(LocationDenied);
