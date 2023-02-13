import React, { useState } from 'react'
import axios from 'axios'
import './Home.css'

const baseURL = 'http://localhost:1234'
const re = /^[0-9\b]+$/

export default function Home() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const [steps, setSteps] = React.useState({})

  const setNumberOne = (e) => {
    if (e.target.value === '' || re.test(e.target.value)) {
      setNum1(e.target.value)
    }
    // setNum1(e.target.value)
  }

  const setNumberTwo = (e) => {
    if (e.target.value === '' || re.test(e.target.value)) {
      setNum2(e.target.value)
    }
    // setNum2(e.target.value)
  }

  const handleClick = () => {
    console.log({ num1, num2 })
    if (num1 && num2)
      axios
        .post(baseURL + '/steps', {
          num1: parseInt(num1),
          num2: parseInt(num2),
        })
        .then((response) => {
          console.log(response.data.steps)
          setSteps(response.data.steps)
        })
        .catch((err) => console.log('Error is', err))
    else alert('Please fill both of the numbers')
  }

  let stepsArr = Object.entries(steps)

  return (
    <div>
      <h2>Step Addition</h2>
      <div>
        <label>First Number: </label>
        <input type="text" name="num1" value={num1} onChange={setNumberOne} />
      </div>
      <div>
        <label>Second Number: </label>
        <input type="text" name="num2" value={num2} onChange={setNumberTwo} />
      </div>
      <button onClick={handleClick}>Generate Steps</button>
      <br />
      <br />
      <div
        style={{
          backgroundColor: 'black',
          width: 500,
          height: 200,
        }}
      >
        {stepsArr.length ? (
          <table style={{ color: 'white' }}>
            <thead className="tableHeader">
              <tr>
                <td>{'{'}</td>
              </tr>
            </thead>
            <tbody>
              {stepsArr.map((step, index) => {
                return (
                  <tr key={index} className="steps">
                    <td>{step[0]}</td>
                    <td>{':{carryString:'}</td>
                    <td>{step[1].carryString + ' ,'}</td>
                    <td>{'sumString:'}</td>
                    <td>{step[1].sumString}</td>
                    <td>{'}'}</td>
                  </tr>
                )
              })}

              {/* <tr>
                <td>"step1"</td>
                <td>{':{carrySTring:'}</td>
                <td>{'1_,'}</td>
                <td>{'sumString:'}</td>
                <td>{'2'}</td>
                <td>{'}'}</td>
              </tr>
              <tr>
                <td>"step2"</td>
                <td>{':{carrySTring:'}</td>
                <td>{'01_,'}</td>
                <td>{'sumString:'}</td>
                <td>{'72'}</td>
                <td>{'}'}</td>
              </tr> */}
            </tbody>
            <tfoot className="tableFooter">
              <tr>
                <td>{'}'}</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
