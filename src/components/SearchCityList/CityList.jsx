import React from 'react';
import { ListGroup, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
function CityList({cityList}) {
    console.log('CityList Component loaded');
    return (
        <Col xs={8} sm={8} md={8} lg={8}>
            <ListGroup>
                {
                   cityList.map((city ,i ) => <ListGroup.Item key={i}><Link to={`/cityDetail/${city.woeid}`}>{city.title}</Link></ListGroup.Item>)
                }
            </ListGroup>
        </Col>
    )
}

export default React.memo(CityList);
