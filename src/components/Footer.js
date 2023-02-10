import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = ()=> {
    return(
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{size:4, offset:1}} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/games'>Games</Link></li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram btn-secondary'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook btn-primary'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google btn-danger'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'><a
                            role='button'
                            className='btn btn-link'
                            href='tel:+11235551234'
                        >
                            <i className='fa fa-phone' /> 1-123-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> notreal@email.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
