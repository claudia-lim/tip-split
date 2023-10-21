import {useState} from 'react'
import ResultCalculation from './components/ResultCalculation'

import './App.css'

//to do:
//validation - don't calculate if empty inputs
//calculation area --- change to integers only
//reset button

function App() {

    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(1);

    const chooseTip = (e) => {
        setTip(e.target.value);
    }

    const enterBill = e => {
        let inputBill = Number(e.target.value);
        let roundedBill = inputBill.toFixed(2);
        // console.log(roundedBill);
        return setBill(Number(roundedBill));
    }
    return (
        <>
            <h1>Tip Splitter</h1>
            <div id='app-container'>
                <div id='input-container'>
                    <div id='bill'>
                        <h4>Bill</h4>
                        <input type='number'
                               min='0'
                               step='0.10'
                               id='bill-input'
                               placeholder='Enter bill amount'
                               onChange={enterBill}>
                        </input>
                        <p>Bill amount = £{bill}</p>
                    </div>

                    <div id='tip'>
                        <h4>Select Tip %</h4>
                        <label className='tip-button'>5%<input onClick={chooseTip} type="checkbox"
                                                               value='5'></input></label>
                        <label className='tip-button'>10%<input onClick={chooseTip} type='checkbox' value='10'></input></label>
                        <label className='tip-button'>15%<input onClick={chooseTip} type='checkbox' value='15'></input></label>
                        <label className='tip-button'>25%<input onClick={chooseTip} type='checkbox' value='25'></input></label>
                        <label className='tip-button'>50%<input onClick={chooseTip} type='checkbox' value='50'></input></label>
                        <input type='number' placeholder='custom tip' onChange={chooseTip}></input>

                        <p>Selected tip = {tip}%</p>
                    </div>

                    <div id='num-people'>
                        <h4>Number of People</h4>
                        <input type='number' placeholder="Can't be zero"
                               onChange={e => setPeople(e.target.value)}></input>
                        <p>Number of people: {people}</p>
                    </div>
                </div>
                <div id='result-container'>
                    <ResultCalculation bill={bill} tip={tip} people={people}/>
                </div>
            </div>
        </>
    )
}

export default App
