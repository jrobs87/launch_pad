import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import cabin from './cabin.jpg';

// primary app container component
function Home() {

  const style = {
    paddingTop: '10em'
  }

  return (
    <div className="App">
      <Container fluid={false} style={style}>
        <Row>
          <Col>
            <h1>App Entry Point</h1>
            <p>React boilerplate including Router, reactstrap, and custom Components.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
