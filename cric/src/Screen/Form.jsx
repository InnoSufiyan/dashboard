import React, { useState } from 'react'
import "./Form.css"
import axios from "axios"
import { baseURI } from './core'
const Form = () => {
    const [seriesName , setSeriesName] = useState(null)
    const [teamOneName , setTeamOneName] = useState(null)
    const [teamTwoName , setTeamTwoName] = useState(null)
    const [teamOneScore , setTeamOneScore] = useState(null)
    const [teamTwoScore , setTeamTwoScore] = useState(null)
    const [btOne , setBtOne] = useState(null)
    const [btTwo , setBtTwo] = useState(null)
    const [btOneScore , setBtOneScore] = useState(null)
    const [btTwoScore , setBtTwoScore] = useState(null)
    
    const [bowOne , setBowOne] = useState(null)
    const [bowTwo , setBowTwo] = useState(null)
    const [bowTwoScore , setBowTwoScore] = useState(null)
    const [bowOneScore , setBowOnescore] = useState(null)
    const submitHandler = ()=>{
        console.log("hit")

        axios.post(`${baseURI}/api/v1/stats`)
    
    }
   
    return (
        <div className="formBox"> 

            <section className="inputsFieldBox">

            <h1>ADMIN PANEL CRICKET DASHBOARD</h1>

            <input type="text" placeholder="series name" id="" />
            <input type="text" placeholder="Team 1 name" id="" />
            <input type="text" placeholder="Team 2 name" id="" />
            <input type="text" placeholder="team1Score" id="" />
            <input type="text" placeholder="Team 2 score" id="" />
            <input type="text" placeholder="Batting Player 1" id="" />
            <input type="text" placeholder="Batting Player 2" id="" />
            <input type="text" placeholder="Batting Player 1 Score" id="" />
            <input type="text" placeholder="Batting Player 2 Score" id="" />
            <input type="text" placeholder="Bowler Player 1" id="" />
            <input type="text" placeholder="Bowler Player 2" id="" />
            <input type="text" placeholder="Bowler Player Stats 1" id="" />
            <input type="text" placeholder="Bowler Player Stats 2" id="" />

            <button onClick={submitHandler}>SUBMIT</button>


            </section>

        </div>
    )
}

export default Form
