import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';
import img1 from './img1.png'

function App(props) {
  console.log(props)

  return (
   
      <Container fluid className="vh-100 p-5 hoopersBlack">
        <Row>
          <Col xs= {2}>
          <h1>articles</h1>
          </Col>
        <Col>
        <hr></hr>
        </Col>
        
        </Row>
  <Row>
    
    <Col>
    <img src={img1} alt="Cover photo 1"/>
    <div className="text-white">
      
    </div>
    </Col>
     <Col>
   <img src={img1} alt="Cover photo 1"/>
    </Col>
    <Col>
    <img src={img1} alt="Cover photo 1"/>
    </Col> 
  </Row>
  <Container class="text-center">
  <Button variant="warning">more articles</Button>{' '}
  </Container>
</Container>

  );
}


export default App;
