import { useRef, useState, useEffect } from 'react';
import {Button} from 'reactstrap';

function Stopwatch() {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);
    const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(()=>setCount(c => c+1), 1000);
    };
    const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    };
    useEffect(() => { return () => clearInterval(timerIdRef.current); }, []);
    return (
    <div>
        <h1>Timer: {count}s</h1><br/><br/>
        <div>
            <Button className='btn-success' onClick={startHandler}>Start</Button>{'  '}
            <Button className='btn-danger' onClick={stopHandler}>Stop</Button>
        </div>
    </div>
    );
}

export default Stopwatch;