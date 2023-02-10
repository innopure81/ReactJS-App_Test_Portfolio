import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DiceGame from "../features/DiceGame";

const GamePage = ()=> {
    return (
        <Container>
            <SubHeader current='Games'></SubHeader>
            <DiceGame />            
        </Container>
    )
};

export default GamePage;