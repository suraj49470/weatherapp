import React from 'react'

function Error() {
    return (
        <div className="cityDetailErrorContainer">
            <span className="material-icons" style={{'fontSize' : '100px'}}>
                cloud_off
            </span>
        </div>
    )
}

export default React.memo(Error);
