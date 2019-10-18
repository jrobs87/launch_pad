import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import cabin from './cabin.jpg';

// primary app container component
function Home() {

  const style={
    paddingTop: '10em'
  }
  return (
    <div className="App">
      <Container fluid={false} style={ style }>
        <Row>
        <Col l="3">
        <img style={ {maxHeight: "600px"} } src={ cabin } alt={ "not found" }></img>
        </Col>
          <Col l="9">
            <h1>App Entry Point</h1>
            <p>React boilerplate including Router, reactstrap, and custom Components.</p>
            <p>This will be the foundation for all future freelance projects.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
