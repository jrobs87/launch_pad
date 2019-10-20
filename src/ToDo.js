import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function ToDo() {
    const style={
        paddingTop: '10em'
      }

    return (
        <Container style={ style }>
            <Row>
                <Col>
                    <h3>Loading Spinner</h3>
                </Col>
            </Row>
        </Container>

    )
}

export default ToDo;