import './ResultCalculation.css'
function resultCalculation ({bill, tip, people}) {

    const tipPerPerson = (bill * (tip / 100)) / people;
    console.log('bill = ' + bill);
    console.log('tip per person = ' + tipPerPerson);
const totalPerPerson = tipPerPerson + Number(bill/people);
console.log('total per person = ' + totalPerPerson);

    return (
        <>
            <div className='result'>
                <div>
                    <h3>Tip Amount</h3>
                    <p>/person</p>
                </div>

            <h2>£{tipPerPerson}</h2>
            </div>

            <div className='result'>
            <div>
            <h3>Total</h3>
            <p>/person</p>
            </div>
            <h2>£{totalPerPerson}</h2>
            </div>
            <div><button id='reset'>Reset</button></div>
        </>
    )
}
export default resultCalculation;