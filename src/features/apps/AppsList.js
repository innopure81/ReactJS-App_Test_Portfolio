//import {CAMPSITES} from '../../app/shared/CAMPSITES';
import {Col, Row} from 'reactstrap';
import AppCard from './AppCard';
import {selectAllApps} from './appsSlice';
import { useSelector } from 'react-redux';
// import Error from '../../components/Error';
// import Loading from '../../components/Loading';

const AppsList = ()=>{
    const apps = useSelector(selectAllApps);
    console.log('Apps:', apps);
    
    // const errMsg = useSelector((state)=> state.apps.errMsg);
    // const isLoading = useSelector((state)=>state.apps.isLoading);

    // if(isLoading){
    //     return(<Row><Loading /></Row>)
    // }

    // if(errMsg){
    //     return(<Row><Error errMsg={errMsg} /></Row>)
    // }

    return (
        <Row className='ms-auto' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            { apps.map( (app)=>{
                return(
                <Col md='5' className='m-3' key={app.id} >
                    <AppCard app={app} />
                </Col>
                );
            } ) }
        </Row>
    );
};

export default AppsList; 