const ResultMessage = (props) => {
    const { dice1, dice2 } = props;
    
    const getResult = (dice1, dice2) => {
        if (!dice1) {
            return 'nothing yet';
        }
        if (dice1 === 1 && dice2 === 1) {
            return 'snake eyes';
        }
        if (dice1 === 6 && dice2 === 6) {
            return 'Boxcars';
        }
        return dice1 + dice2;
    };
    
    const result = getResult(dice1, dice2);

    return <div><h3>You rolled... {result}! Totol so far!</h3></div>;
};

export default ResultMessage;