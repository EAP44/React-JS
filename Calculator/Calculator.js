import { useState } from 'react';
import './cal.css';

export default function Cal() {
    const [Numv, setNumv] = useState('0');
    const [prevNum, setPrevNum] = useState(null);
    const [operator, setOperator] = useState('');
    const [isDecimal, setIsDecimal] = useState(false);

    const NumVal = (e) => {
        if (Numv === '0') {
            setNumv(e.target.value);
        } else {
            setNumv((prev) => prev + e.target.value);
        }
    };

    const handleOperator = (e) => {
        setPrevNum(Numv);
        setNumv('0');
        setOperator(e.target.value);
        setIsDecimal(false);
    };

    const equals = () => {
        if (prevNum && operator) {
            let result;
            const currentNum = parseFloat(Numv);
            const prev = parseFloat(prevNum);

            switch (operator) {
                case '+':
                    result = prev + currentNum;
                    break;
                case '-':
                    result = prev - currentNum;
                    break;
                case '×':
                    result = prev * currentNum;
                    break;
                case '÷':
                    result = prev / currentNum;
                    break;
                case '%':
                    result = (prev * currentNum) / 100;
                    break;
                default:
                    return;
            }

            setNumv(result.toString());
            setPrevNum(null);
            setOperator('');
        }
    };

    const handleComma = (e) => {
        if (!isDecimal) {
            setNumv((prev) => prev + e.target.value);
            setIsDecimal(true);
        }
    };

    const clear = () => {
        setNumv('0');
        setPrevNum(null);
        setOperator('');
        setIsDecimal(false);
    };

    return (
        <>
            <div className="calculator-container">
                <section className="screen">{Numv}</section>
                <div className="button-row">
                    <input
                        type="button"
                        className="button"
                        value={Numv !== '0' ? 'C' : 'AC'}
                        onClick={clear}
                    />
                    <input
                        type="button"
                        className="button"
                        value='-/+'
                        onClick={handleOperator}
                    />
                    <input
                        type="button"
                        className="button"
                        value='%'
                        onClick={handleOperator}
                    />
                    <input
                        type="button"
                        className="button"
                        value='÷'
                        onClick={handleOperator}
                    />
                </div>
                <div className="button-row">
                    <input
                        type="button"
                        className="button"
                        value={7}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value={8}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value={9}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value='×'
                        onClick={handleOperator}
                    />
                </div>
                <div className="button-row">
                    <input
                        type="button"
                        className="button"
                        value={4}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value={5}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value={6}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value='-'
                        onClick={handleOperator}
                    />
                </div>
                <div className="button-row">
                    <input
                        type="button"
                        className="button"
                        value={1}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value={2}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value={3}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value='+'
                        onClick={handleOperator}
                    />
                </div>
                <div className="button-row">
                    <input
                        type="button"
                        className="button zero"
                        value={0}
                        onClick={NumVal}
                    />
                    <input
                        type="button"
                        className="button"
                        value=','
                        onClick={handleComma}
                    />
                    <input
                        type="button"
                        className="button"
                        value='='
                        onClick={equals}
                    />
                </div>
            </div>
        </>
    );
}
