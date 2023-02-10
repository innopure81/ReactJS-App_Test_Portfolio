import '../App.css';
import DiceImg1 from '../image/Dice1.png'
import DiceImg2 from '../image/Dice2.png';
import DiceImg3 from '../image/Dice3.png';
import DiceImg4 from '../image/Dice4.png';
import DiceImg5 from '../image/Dice5.png';
import DiceImg6 from '../image/Dice6.png';
import ResultMessage from './ResultMessage';
import {useState} from 'react';

const DiceGame = () => {
    const diceImages = [DiceImg1,DiceImg2,DiceImg3,DiceImg4,DiceImg5,DiceImg6];
    const [image, setNewImage] = useState(diceImages[0]);
    const [image2, setNewImage2] = useState(diceImages[1]);
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const [maxRoll] = useState(6);
    
    const rollDice = ()=>{
    const randomNum1 = Math.floor(Math.random()*6);
    const randomNum2 = Math.floor(Math.random()*6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
    const roll1 = Math.floor(Math.random() * maxRoll) + 1;
    const roll2 = Math.floor(Math.random() * maxRoll) + 1;
    setDice1(roll1);
    setDice2(roll2);
    };
    return (
    <div className="App">
        <center>
            <h1>Welcome to Ultimate Dice Roller!</h1>
            <hr />
            <ResultMessage dice1={dice1} dice2={dice2} />
            <div>
                <span className={`dice dice-${dice1}`} />
                <span className={`dice dice-${dice2}`} />
            </div>
            <button onClick={rollDice} type="button" class="btn btn-success btn-lg">Roll Dice!</button>
            <div className='container'>
                <img className='square' src={image}></img> 
                <div style={{width: '5px', display:'inline-block'}}></div>
                <img className='square' src={image2}></img> 
            </div>
        </center>
    </div>
    );
}

export default DiceGame;
/* Bonus Challenge Level 2
Use local state to keep track of the total number of points rolled for multiple rolls, and show it as part of the ResultMessage component.*/


/*Bonus Challenge Level 3
Allow the user to choose how many dice to roll. Then, instead of having dice1 and dice2 hard-coded, dynamically render the chosen number of dice, each with its own random number. */