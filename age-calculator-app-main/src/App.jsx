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


  const [isDayFieldEmpty, setIsDayFieldEmpty] = useState(true);
  const [isMonthFieldEmpty, setIsMonthFieldEmpty] = useState(true);
  const [isYearFieldEmpty, setIsYearFieldEmpty] = useState(true);
  const [isDayInputValid, setIsDayInputValid] = useState(false);
  let invalidDayRangeError = (<span className='error-text'>You must choose a number between 1 and 31</span>);
  let invalidMonthRangeError = (<span className='error-text'>You must choose a number between 1 and 12</span>);
  let invalidYearError = (<span className='error-text'>You must choose a number less than or eequal to 2023</span>);
  let invalidDateError = (<span className='error-text'>Your date is invalid.</span>)
  let requiredFieldError = (<span className='error-text'>This field is required</span>)


  const validateForm = (event) => {
    let d = document.forms["calculteAgeForm"]["day"].value;
    let m = document.forms["calculteAgeForm"]["month"].value;
    let y = document.forms["calculteAgeForm"]["year"].value;

    // alert("Your form was submitted");

    event.preventDefault();

    if (d !== "") { // && m === "" && y === ""
      setIsDayFieldEmpty(false);
      //setIsMonthFieldValid(false);
      //setIsYearFieldValid(false);
    } else if (d >= 1 && d <= 31) {
      setIsDayInputValid(true);
    }

    if (m === "") {
      setIsMonthFieldEmpty(false);
    }

    if (y === "") {
      setIsYearFieldEmpty(false);
    }

    //event.preventDefault();
    //calculateAge();  

    // let inputs = document.getElementById("form").elements;

    // for (let i = 0; i < inputs.lenght; i++) {
    //   inputs[i].addEventListener("invalid", function () {
    //     document.getElementById("form").className = "submitted";
    //   })
    // }
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
                  <label htmlFor='day'>day</label><br />
                  <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} placeholder='DD' /> {/*min={1} max={31} */}
                </div>
                <div>
                  {/* {!isDayFieldEmpty ? requiredFieldError : (<></>)}
                {!isDayInputValid ? invalidDayRangeError : (<></>)} */}
                </div>
              </div>
              <div className='col col-mid'>
                <div>
                  <label htmlFor='month'>month</label><br />
                  <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} placeholder='MM' /> {/*min={1} max={12} */}
                </div>
                <div>
                  {/* {!isMonthFieldEmpty ? requiredFieldError : (<></>)} */}
                </div>
              </div>
              <div className='col col-right'>
                <div>
                  <label htmlFor='year'>year</label><br />
                  <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} placeholder='YYYY' /> {/*max={2023} */}
                </div>
                <div>
                  {/* {!isYearFieldEmpty ? requiredFieldError : (<></>)} */}
                </div>
              </div>

            </div>
            {/* <input type='submit' value="submit" id="submitBtn" /> */}
          </form>


          {/* <button type='button' onClick={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}>Submit</button> */}

          {/* <div className='divider'>
            <hr className='solid'></hr><button type='button' onClick={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}><img src="../assets/images/icon-arrow.svg" /></button>
          </div> */}


          <div className='divider' id="row">
            <div><hr className='solid'></hr></div>
            <div><button type='button' onClick={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}><img src="../assets/images/icon-arrow.svg" /></button></div>
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

{/*<NotValidatedInputs isDayFieldValid={isDayFieldValid} isMonthFieldValid={isMonthFieldValid} isYearFieldValid={isYearFieldValid} /> */ }
function InvalidInputs({ isDayFieldValid, isMonthFieldValid, isYearFieldValid }) {
  return (
    <>
      <form className='form' id="form" name="calculteAgeForm" action="" method="" onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}> {/*onSubmit={(e) => {validateForm(e); calculateAge();}} */}
        <div className='col col-left'>
          <label className='invalid-label' htmlFor='day'>day</label><br />
          <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} min={1} max={31} />
          {!isDayFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <div className='col col-mid'>
          <label className='invalid-label' htmlFor='month'>month</label><br />
          <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} min={1} max={12} />
          {!isMonthFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <div className='col col-right'>
          <label className='invalid-label' htmlFor='year'>year</label><br />
          <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} max={2023} />
          {!isYearFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <input type='submit' value="submit" id="submitBtn" />
      </form>
    </>
  )
}

function NotValidatedInputs({ isDayFieldValid, isMonthFieldValid, isYearFieldValid }) {
  return (
    <>
      <form className='form' id="form" name="calculteAgeForm" action="" method="" onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}> {/*onSubmit={(e) => {validateForm(e); calculateAge();}} */}
        <div className='col col-left'>
          <label htmlFor='day'>day</label><br />
          <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} min={1} max={31} placeholder='DD' />
          {!isDayFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <div className='col col-mid'>
          <label htmlFor='month'>month</label><br />
          <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} min={1} max={12} placeholder='MM' />
          {!isMonthFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <div className='col col-right'>
          <label htmlFor='year'>year</label><br />
          <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} max={2023} placeholder='YYYY' />
          {!isYearFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <input type='submit' value="submit" id="submitBtn" />
      </form>
    </>
  )
}

function ValidatedInputs({ isDayFieldValid, isMonthFieldValid, isYearFieldValid }) {
  return (
    <>
      <form className='form' id="form" name="calculteAgeForm" action="" method="" onSubmit={(e) => { validateForm(e); calculateAge(dayInput, monthInput, yearInput) }}> {/*onSubmit={(e) => {validateForm(e); calculateAge();}} */}
        <div className='col col-left'>
          <label htmlFor='day'>day</label><br />
          <input type='number' id="day" onChange={(e) => { setDayInput(e.target.value); validateForm(e.target.value) }} min={1} max={31} placeholder='DD' />
          {!isDayFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <div className='col col-mid'>
          <label htmlFor='month'>month</label><br />
          <input type='number' id="month" onChange={(e) => { setMonthInput(e.target.value) }} min={1} max={12} placeholder='MM' />
          {!isMonthFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <div className='col col-right'>
          <label htmlFor='year'>year</label><br />
          <input type='number' id="year" onChange={(e) => { setYearInput(e.target.value) }} max={2023} placeholder='YYYY' />
          {!isYearFieldValid ? (
            <span className='error-text'>
              This field is required
            </span>) :
            (<></>)
          }
        </div>
        <input type='submit' value="submit" id="submitBtn" />
      </form>
    </>
  )
}

export default App
