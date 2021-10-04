import React from 'react';
import { ListGroup, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
function CityList() {
    console.log('CityList Component loaded');
    return (
        <Col xs={8} sm={8} md={8} lg={8}>
            <ListGroup>
                <ListGroup.Item><Link to="/cityDetail">Link Item 1</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/cityDetail">Link Item 1</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/cityDetail">Link Item 1</Link></ListGroup.Item>
            </ListGroup>
        </Col>
    )
}

export default React.memo(CityList);
