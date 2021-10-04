import React from 'react';
import {Col, Button, Form } from 'react-bootstrap';



function Search({userLocation , getQuery , query}) {
    console.log('Search component loaded');
    return (
        <>
            <Col xs={8} sm={8} md={8} lg={8}>
                <Form.Control value={query ? query : ""} onChange={(e) => getQuery(e.target.value)} size="md" type="text" placeholder="Type city name..." />
            </Col>
           
            <Col xs={1} sm={1} md={1} lg={1} className="location">
                <Button variant="link" size="sm" onClick={(e) => userLocation()}><span className="material-icons">my_location</span></Button>
            </Col>
        </>
    )
}

export default React.memo(Search);
