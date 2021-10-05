import React from 'react'
import { Row, Col, } from 'react-bootstrap';
function ResultBasedOn(props) {
    return (
        <Row className="pT10">
            <Col xs={12} sm={12} md={12} lg={12}>
                <small className="text-muted"><b>Results are based on your : {props.msg}</b></small>
            </Col>
        </Row>
    )
}

export default React.memo(ResultBasedOn);
