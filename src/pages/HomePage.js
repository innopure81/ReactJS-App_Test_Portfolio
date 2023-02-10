import { Container, Row, Col} from "reactstrap";
import SubHeader from "../components/SubHeader";
import Hello from '../app/assets/img/Hello.json';
//import Background from '../app/assets/img/fantasy.jpg';
import Lottie from 'lottie-react';

const HomePage = ()=> {
    return (
        <Container>

            <SubHeader current='Hello, world!'></SubHeader>
            
            <div className="App">
                <Row>                    
                    <Col><Lottie animationData={Hello} options={defaultOptions} width={30} height={30} /></Col>
                    <Col md='7'>
                        <h3 style={rowStyle}> Let me introduce myself. My name is Ha. I am learning web development skills. This is my first React JS Project. I learned how to create components and render them in a multilayered structure using react-router-dom. <hr /> By using Redux, I learned how to apply useDispatch() hook to prevent confliction in interactive pages. In many ways, I get interested in building software and how to interact with user's entries. Here I tried to present interactive elements of my React skills. Please enjoy! </h3>
                    </Col>
                    
                </Row>
                <Row style={{display:'flex', justifyContent:'center'}}>
                    <Col><button style={btnStyle}>Resume</button></Col>
                    <Col><button style={btnStyle}>Portfolio</button></Col>
                </Row>
                
                
            </div>

        </Container>
    )
};

const rowStyle= {
    textAlign:'left',
    padding: "2rem",
    margin: "2rem",
    border: "3px solid blue"}

const btnStyle = {
    backgroundColor: "white",
    display:'inline-block',
    border: "none",
    borderRadius: "1rem",
    color: "blue",
    padding: "1rem",
    margin: "2rem",
    fontSize: "2rem",
    width: "12rem"
};
const defaultOptions = {
    loop: true,
    autoplay: true,   
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
};

export default HomePage;

// const contStyle={backgroundImage: `url(${Background})`, 
//                 backgroundPosition: 'top',
//                 backgroundSize: 'contain'}