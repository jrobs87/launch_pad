import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function RouteOne() {
    const style={
        paddingTop: '10em'
      }

    return (
        <Container style={ style }> 
        <Row>
            <Col>
            <h1>Route One</h1>
            <p>Example of animation with React Transition Group.</p>
            </Col>
        </Row>
        </Container>
    )
}

export default RouteOne