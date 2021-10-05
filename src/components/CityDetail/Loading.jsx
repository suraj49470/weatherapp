import React from 'react'
import { Spinner } from 'react-bootstrap';
function Loading() {
    return (
        <div className="cityDetailLoadingContainer">
              <Spinner animation="border" variant="dark" size="lg"/>
        </div>
    )
}

export default React.memo(Loading);
