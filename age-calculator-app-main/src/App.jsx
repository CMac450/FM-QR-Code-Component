import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dayInput, setDayInput] = useState(0);
  const [monthInput, setMonthInput] = useState(0);
  const [yearInput, setYearInput] = useState(0);

  const [calculatedDays, setCalculatedDays] = useState(0);
  const [calculatedMonths, setCalculatedMonths] = useState(0);
  const [calculatedYears, setCalculatedYears] = useState(0);
  const calculateAge = (dayInput, monthInput, yearInput) => {

    let bDay = dayInput;
    bDay = parseInt(bDay);

    let bMonth = monthInput;
    bMonth = parseInt(bMonth);

    let bYear = yearInput;
    bYear = parseInt(bYear);


    const todayFull = new Date();
    let tDay = todayFull.getDate();
    let tMonth = todayFull.getMonth() + 1; ///added + 1 bc getMonth uses a zero-based index so Jan starts at 0
    let tYear = todayFull.getFullYear();

    if (tDay < bDay) {
      setCalculatedDays((tDay - bDay) + 30);
      tMonth -= 1;
    } else {
      setCalculatedDays(tDay - bDay);
    }

    if (tMonth < bMonth) {
      setCalculatedMonths((tMonth - bMonth) + 12);
      tYear -= 1;
    } else {
      setCalculatedMonths(tMonth - bMonth)
    }

    setCalculatedYears(tYear - bYear);
  }

  // const validateForm = (event) => {
  //   event.preventDefault();
  //   calculateAge();
  // }

  //input borders and labels must turn red if invalid. also add message "this field is required" if field is empty
  return (
    <>
      <div className='card'>
        <div className='input-row'>
          {/* <form  className='form' name="calculteAgeForm" action="" method="" onSubmit={validateForm}> */}
          <div className='col col-left'>
            <label htmlFor='day'>day</label><br />
            <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value) }} />
          </div>
          <div className='col col-mid'>
            <label htmlFor='month'>month</label><br />
            <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} />
          </div>
          <div className='col col-right'>
            <label htmlFor='year'>year</label><br />
            <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} />
          </div>
          {/* <input type='submit'/> */}
          {/* </form> */}
        </div>

        <button type='button' onClick={(e) => { calculateAge(dayInput, monthInput, yearInput) }}>Submit</button>

        <div className='divider'>

        </div>

        <div className='result'>
          <p className='result-text'>
            <i>
              {calculatedYears ? (
                <span className='result-num'>{calculatedYears}</span>
                ) : (
                  <span className='result-num'>--</span>
                )
              }
              years
            </i> <br />
            <i>
              {calculatedMonths ? (
                <span className='result-num'>{calculatedMonths}</span>
                ) : (
                  <span className='result-num'>--</span>
                )
              }
              months
            </i> <br />
            <i>
              {calculatedDays ? (
                <span className='result-num'>{calculatedDays}</span>
                ) : (
                  <span className='result-num'>--</span>
                )
              }
              days
            </i> <br />
          </p>
        </div>
      </div>
    </>
  )
}
export default App
