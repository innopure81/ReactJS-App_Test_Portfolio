import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import DiceGame from "../features/DiceGame";

const DiceRollersPage = ()=> {
    return (
        <Container>
            <SubHeader current='DiceRollers'></SubHeader>
            <DiceGame />            
        </Container>
    )
};

export default DiceRollersPage;