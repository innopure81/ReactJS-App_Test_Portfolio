import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

const AppCard = ({app})=>{
    const {image, name, id} = app;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay><CardTitle style={{fontSize: 30,color:'#dd6bfae2',fontWeight: 'bold',textAlign:'center',
    paddingTop:'100px'}}>{name}</CardTitle></CardImgOverlay>
            </Card>
        </Link>
    );
};

export default AppCard;