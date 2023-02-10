import {Container} from 'reactstrap';
import AppsList from '../features/apps/AppsList.js'; 
import SubHeader from '../components/SubHeader.js';


const AppsPage = ()=>{
    return(
        <Container >
            <SubHeader current='Apps' />
            <div className="App"><AppsList /></div>
        </Container>
    );
};
//<Button onClick={()=>toggleCampsite(selectRandomCampsite())}>Select Random Campsite</Button>
export default AppsPage;