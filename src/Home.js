import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import cabin from './cabin.jpg';

// primary app container component
function Home() {

  const style = {
    paddingTop: '10em',
    width: '100%',
    height: '100vh'
  }

  return (
    <div className="App" style={style}>
      <Container fluid={false} >
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
