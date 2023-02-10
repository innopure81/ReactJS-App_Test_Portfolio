import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import Stopwatch from "../features/Stopwatch";
import Unicorn from '../app/assets/img/unicorn-nuki.png';
import ChangeColor from "../features/ChangeColor";
import Background from '../app/assets/img/fantasy.jpg';

const ButtonsPage = ()=> {
    return (
        <Container style={{backgroundImage: `url(${Background})`, 
                            backgroundPosition: 'top',
                            backgroundSize: 'contain'}}>
            <SubHeader current='SimpleButtons'></SubHeader>
            <Row>
                <Col>
                    <div style={{display:'inline-block'}}> <img className='float-start' src={Unicorn} alt='logo' /><ChangeColor /> </div>
                </Col>
                <Col>
                    <div style={watchStyle}> <Stopwatch /> </div>
                </Col>
            </Row>
            
        </Container>
    )
};

const watchStyle = { 
    padding: "2rem",
    margin: "2rem",
    border: "3px solid green",
}

export default ButtonsPage;