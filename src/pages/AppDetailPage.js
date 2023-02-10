import AppDetail from '../features/apps/AppDetail';
import AppAnime from '../features/apps/AppAnime';
//import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useParams } from 'react-router-dom';
import { selectAppById } from '../features/apps/appsSlice';
import { Container, Row, Col } from 'reactstrap';

const AppDetailPage = () => {
    const { appId } = useParams();
    const app = selectAppById(appId);

    return (
        <Container>
            <SubHeader current={app.name} detail='true' />
            <Row>
                <Col><AppDetail app={app} /></Col>
                <Col><AppAnime /></Col>
            </Row>
        </Container>
    )
};
export default AppDetailPage;

//<CommentsList campsiteId={campsiteId} />