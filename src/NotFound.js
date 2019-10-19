import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function NotFound() {
    const style={
        paddingTop: '10em'
      }
    return (
        <Container style={ style }>
            <Row>
                <Col>
                    <h1>404</h1>
                    <p>You have reached the singularity!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound