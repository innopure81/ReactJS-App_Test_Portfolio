import {Button} from 'reactstrap';
import catAnime from '../../app/assets/img/catAnime.json';
import catAnime2 from '../../app/assets/img/catAnime2.json';
import Lottie from 'lottie-react';
import {useState} from 'react';

const AppAnime = () => {
    const [state, setState] = useState(true);

    return (
        <div 
            style={{
                display : 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
            }}>

            <Button onClick={()=>setState(!state)}>
                {state ? "Go to sleep!" : "Have more fun!"}
            </Button>  
            
            {state ? <Lottie animationData={catAnime} /> : <Lottie animationData={catAnime2} />}

        </div>

    )
};

export default AppAnime;