import {Col, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const SubHeader = ({current, detail})=>{

    return(
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/games'>Games</Link>
                        </BreadcrumbItem>
                    )}
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/apps'>Apps</Link>
                        </BreadcrumbItem>
                    )}                    
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>

                <h3 className='text-primary'>{current}</h3>
                <hr />
                
            </Col>
        </Row>

    )
};

export default SubHeader;

