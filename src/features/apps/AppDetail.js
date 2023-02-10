import {Card, CardImg, CardText, CardBody, Col} from 'reactstrap';

const AppDetail = ({app})=>{
    const {image, name, description} = app;

    return(
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText style={{fontsize:'20px', color:'black'}}>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default AppDetail;