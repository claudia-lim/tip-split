import './ResultCalculation.css'
function resultCalculation ({bill, tip, people}) {
    const billInPence = bill * 100;
    const tipPerPerson = ((billInPence * (tip / 100)) / people);
    const roundedTip = Math.round(tipPerPerson);
    const totalPerPerson = tipPerPerson + Number(billInPence/people);
    const roundedtotalPerPerson = Math.round(totalPerPerson);

    return (
        <>
            <div className='result'>
                <div>
                    <h3>Tip Amount</h3>
                    <p>/person</p>
                </div>

            <h2>£{roundedTip/100}</h2>
            </div>

            <div className='result'>
            <div>
            <h3>Total</h3>
            <p>/person</p>
            </div>
            <h2>£{roundedtotalPerPerson/100}</h2>
            </div>
            <div><button id='reset'>Reset</button></div>
        </>
    )
}
export default resultCalculation;