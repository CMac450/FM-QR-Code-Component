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
      if (bDay !== 0) {
        setCalculatedDays((tDay - bDay) + 30);
      }
      tMonth -= 1;
    } else {
      if (bDay !== 0) {
        setCalculatedDays(tDay - bDay);
      }
    }

    if (tMonth < bMonth) {
      if (bMonth !== 0) {
        setCalculatedMonths((tMonth - bMonth) + 12);
      }

      tYear -= 1;
    } else {
      if (bMonth !== 0) {
        setCalculatedMonths(tMonth - bMonth);
      }
    }

    if (bYear !== 0) {
      setCalculatedYears(tYear - bYear);
    }
  }


  // const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isDayFieldEmpty, setIsDayFieldEmpty] = useState(false);
  const [isMonthFieldEmpty, setIsMonthFieldEmpty] = useState(false);
  const [isYearFieldEmpty, setIsYearFieldEmpty] = useState(false);
  const [isDayInputInvalid, setIsDayInputInvalid] = useState(false);
  const [isMonthInputInvalid, setIsMonthInputInvalid] = useState(false);
  const [isYearInputInvalid, setIsYearInputInvalid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  let invalidDayError = (<span className='error-text'><i>Must be a valid day</i></span>);
  let invalidMonthError = (<span className='error-text'><i>Must be a valid month</i></span>);
  let invalidYearError = (<span className='error-text'><i>Must be in the past</i></span>);
  let invalidDateError = (<span className='error-text'><i>Must be a valid date</i></span>)
  let requiredFieldError = (<span className='error-text'><i>This field is required</i></span>)


  const validateForm = (event) => { 
    
    event.preventDefault();

    let d = document.getElementById('dayInput').value;
    let m = document.getElementById('monthInput').value;
    let y = document.getElementById('yearInput').value;
    let thirtyOneDayMonths = [1,3,5,7,8,10,12]
    let thirtyDayMonths = [4,6,9,11]
    let febMonth = 2

    if (d === "") {
      document.getElementById('dayInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('dayLabel').style.color = "hsl(0, 100%, 67%)";
      setIsDayFieldEmpty(true);
    } else if (d < 1 || d > 31) {
      document.getElementById('dayInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('dayLabel').style.color = "hsl(0, 100%, 67%)";
      setIsDayInputInvalid(true);
      setIsDayFieldEmpty(false);
    } else {
      document.getElementById('dayInput').style.outline = "1px solid hsl(0, 0%, 94%)";
      document.getElementById('dayLabel').style.color = "hsl(0, 1%, 44%)";
      setIsDayFieldEmpty(false);
      setIsDayInputInvalid(false);
    }
    

    if (m === "") {
      document.getElementById('monthInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('monthLabel').style.color = "hsl(0, 100%, 67%)";
      setIsMonthFieldEmpty(true);
    } else if (m < 1 || m > 12) {
      document.getElementById('monthInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('monthLabel').style.color = "hsl(0, 100%, 67%)";
      setIsMonthInputInvalid(true);
      setIsMonthFieldEmpty(false);
    } else {
      document.getElementById('monthInput').style.outline = "1px solid hsl(0, 0%, 94%)";
      document.getElementById('monthLabel').style.color = "hsl(0, 1%, 44%)";
      setIsMonthFieldEmpty(false);
    }

    if (y === "") {
      document.getElementById('yearInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('yearLabel').style.color = "hsl(0, 100%, 67%)";
      setIsYearFieldEmpty(true);
    } else if (y > 2023) {
      document.getElementById('yearInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('yearLabel').style.color = "hsl(0, 100%, 67%)";
      setIsYearInputInvalid(true);
      setIsYearFieldEmpty(false);
    } else {
      document.getElementById('yearInput').style.outline = "1px solid hsl(0, 0%, 94%)";
      document.getElementById('yearLabel').style.color = "hsl(0, 1%, 44%)";
      setIsYearFieldEmpty(false);
    }

    if (thirtyOneDayMonths.includes(m)) {
      document.getElementById('yearInput').style.outline = "1px solid hsl(0, 100%, 67%)";
      document.getElementById('yearLabel').style.color = "hsl(0, 100%, 67%)";
    }
  }



  //input borders and labels must turn red if invalid. also add message "this field is required" if field is empty
  return (
    <>
      <div className='card'>

        <div className='card-body'>
          <form className='form' id="form" name="calculteAgeForm" action="" method="" autoComplete='off'> {/*onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }} */}
            <div className='input-row' id="row">
              <div className='col col-left'>
                <div>
                  <label htmlFor='day' id="dayLabel">day</label><br />
                  <input type='number' id="dayInput" onChange={(e) => { setDayInput(e.target.value); validateForm(e) }} placeholder='DD' /> {/*min={1} max={31} */}
                </div>
                <div>
                {isDayFieldEmpty ? requiredFieldError : isDayInputInvalid ? invalidDayError : (<></>)}
                </div>
              </div>
              <div className='col col-mid'>
                <div>
                  <label htmlFor='month' id="monthLabel">month</label><br />
                  <input type='number' id="monthInput" onChange={(e) => { setMonthInput(e.target.value); validateForm(e) }} placeholder='MM' /> {/*min={1} max={12} */}
                </div>
                <div>
                  {/* {!isMonthFieldEmpty ? requiredFieldError : (<></>)} */}
                  {isMonthFieldEmpty ? requiredFieldError : isMonthInputInvalid ? invalidMonthError : (<></>)}
                </div>
              </div>
              <div className='col col-right'>
                <div>
                  <label htmlFor='year' id="yearLabel">year</label><br />
                  <input type='number' id="yearInput" onChange={(e) => { setYearInput(e.target.value); validateForm(e) }} placeholder='YYYY' /> {/*max={2023} */}
                </div>
                <div>
                  {/* {!isYearFieldEmpty ? requiredFieldError : (<></>)} */}
                  {isYearFieldEmpty ? requiredFieldError : isYearInputInvalid ? invalidYearError : (<></>)}
                </div>
              </div>

            </div>
          </form>

          <div className='divider' id="row">
            <div><hr className='solid'></hr></div>
            <div><button type='button' onClick={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}></button></div>
          </div>


          <div className='result'>
            <p className='result-text'>
              <i>
                {calculatedYears !== 0 ? (
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
      </div>
    </>
  )
}

// {/*<NotValidatedInputs isDayFieldValid={isDayFieldValid} isMonthFieldValid={isMonthFieldValid} isYearFieldValid={isYearFieldValid} /> */ }
// function InvalidInputs({ isDayFieldValid, isMonthFieldValid, isYearFieldValid }) {
//   return (
//     <>
//       <form className='form' id="form" name="calculteAgeForm" action="" method="" onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}> {/*onSubmit={(e) => {validateForm(e); calculateAge();}} */}
//         <div className='col col-left'>
//           <label className='invalid-label' htmlFor='day'>day</label><br />
//           <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} min={1} max={31} />
//           {!isDayFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <div className='col col-mid'>
//           <label className='invalid-label' htmlFor='month'>month</label><br />
//           <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} min={1} max={12} />
//           {!isMonthFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <div className='col col-right'>
//           <label className='invalid-label' htmlFor='year'>year</label><br />
//           <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} max={2023} />
//           {!isYearFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <input type='submit' value="submit" id="submitBtn" />
//       </form>
//     </>
//   )
// }

// function NotValidatedInputs({ isDayFieldValid, isMonthFieldValid, isYearFieldValid }) {
//   return (
//     <>
//       <form className='form' id="form" name="calculteAgeForm" action="" method="" onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}> {/*onSubmit={(e) => {validateForm(e); calculateAge();}} */}
//         <div className='col col-left'>
//           <label htmlFor='day'>day</label><br />
//           <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} min={1} max={31} placeholder='DD' />
//           {!isDayFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <div className='col col-mid'>
//           <label htmlFor='month'>month</label><br />
//           <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} min={1} max={12} placeholder='MM' />
//           {!isMonthFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <div className='col col-right'>
//           <label htmlFor='year'>year</label><br />
//           <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} max={2023} placeholder='YYYY' />
//           {!isYearFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <input type='submit' value="submit" id="submitBtn" />
//       </form>
//     </>
//   )
// }

// function ValidatedInputs({ isDayFieldValid, isMonthFieldValid, isYearFieldValid }) {
//   return (
//     <>
//       <form className='form' id="form" name="calculteAgeForm" action="" method="" onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}> {/*onSubmit={(e) => {validateForm(e); calculateAge();}} */}
//         <div className='col col-left'>
//           <label htmlFor='day'>day</label><br />
//           <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} min={1} max={31} placeholder='DD' />
//           {!isDayFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <div className='col col-mid'>
//           <label htmlFor='month'>month</label><br />
//           <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} min={1} max={12} placeholder='MM' />
//           {!isMonthFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <div className='col col-right'>
//           <label htmlFor='year'>year</label><br />
//           <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} max={2023} placeholder='YYYY' />
//           {!isYearFieldValid ? (
//             <span className='error-text'>
//               This field is required
//             </span>) :
//             (<></>)
//           }
//         </div>
//         <input type='submit' value="submit" id="submitBtn" />
//       </form>
//     </>
//   )
// }

export default App
