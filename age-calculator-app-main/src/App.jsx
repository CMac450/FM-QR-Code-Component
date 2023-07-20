import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [dayInput, setDayInput] = useState(0);
  const [monthInput, setMonthInput] = useState(0);
  const [yearInput, setYearInput] = useState(0);
  const [fullBirthDate, setFullBirthDate] = useState("");

  const [calculatedDays, setCalculatedDays] = useState(0);
  const [calculatedMonths, setCalculatedMonths] = useState(0);
  const [calculatedYears, setCalculatedYears] = useState(0);

  const calculateAge = () => {
    setFullBirthDate(`${monthInput}/${dayInput}/${yearInput}`);
    const todayFull = new Date();
    const todayDay = todayFull.getDate();
    const todayMonth = todayFull.getMonth() + 1; ///added + 1 bc getMonth uses a zero-based index so Jan starts at 0
    const todayYear = todayFull.getFullYear();

    const birthDay = (new Date(fullBirthDate)).getDate();
    const birthMonth = (new Date(fullBirthDate)).getMonth() + 1;
    const birthYear = (new Date(fullBirthDate)).getFullYear();

    let month = todayMonth;
    let year = todayYear;

    if (todayDay < birthDay) {
      setCalculatedDays((todayDay - birthDay) + 30);
      month -= 1;
    } else {
      setCalculatedDays(todayDay - birthDay);
    }

    if (month < birthMonth) {
      setCalculatedMonths((month - birthMonth) + 12);
      year -= 1;
    } else {
      setCalculatedMonths(month - birthMonth)
    }

    setCalculatedYears(year - birthYear);

    console.log(`${calculatedYears} years, ${calculatedMonths} months, ${calculatedDays} days`)
    console.log(typeof calculatedYears)

  }

  const validateForm = () => {
    
  }

//input borders and labels must turn red if invalid. also add message "this field is required" if field is empty

  return (
    <>
      <div className='card'>
        <div className='input-row'>
          <form  className='form' name="calculteAgeForm" action="" method="" onSubmit={validateForm}>
            <div className='col col-left'>
              <label htmlFor='day'>day</label><br />
              <input type='text' id="day" onChange={(e) => { setDayInput(e.target.value) }} />
            </div>
            <div className='col col-mid'>
              <label htmlFor='month'>month</label><br />
              <input type='text' id="month" onChange={(e) => { setMonthInput(e.target.value) }} />
            </div>
            <div className='col col-right'>
              <label htmlFor='year'>year</label><br />
              <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} />
            </div>
          </form>
        </div>

        {/* <button type='button' onClick={calculateAge}>Submit</button> */}

        <div className='divider'>

        </div>

        <div className='result'>
          <p className='result-text'>
            {/* {typeof calculatedYears} <br/>
            {calculatedYears} */}
            {/*^gives NaN on first button click which throws error for span */}

            <i>
              <span className='result-num'>{calculatedYears ? {calculatedYears} : (<>--</>)}</span> 
              years
            </i> <br />
            <i>
            <span className='result-num'>{calculatedMonths ? {calculatedMonths} : (<>--</>)}</span> 
              months
            </i> <br /> 
             <i>
            <span className='result-num'>{calculatedDays ? {calculatedDays} : (<>--</>)}</span> 
              days
            </i>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
