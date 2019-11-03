import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Fade} from 'react-reveal'

function RouteOne() {
    const style={
        paddingTop: '10em',
        width: '100%',
        height: '100vh'
      }

    return (
        <Container style={ style }> 
        <Row>
            <Col>
            <Fade left  duration={222} distance={'1em'} delay={ 333 }>
            <h1>Route One</h1>
            <p>Example of animation with React Transition Group.</p>
            </Fade>
            </Col>
        </Row>
        </Container>
    )
}

export default RouteOne