import React, { useState } from 'react'
import "./Form.css"
import axios from "axios"
import { baseURI } from './core'
const Form = () => {
    const [seriesName , setSeriesName] = useState(null)
 
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
            <input type="text" placeholder="Batting Player 2" id="" />
            <input type="text" placeholder="Batting Player 2" id="" />
            <input type="text" placeholder="Bowler Player 1" id="" />
            <input type="text" placeholder="Bowler Player 2" id="" />

            <button onClick={submitHandler}>SUBMIT</button>


            </section>

        </div>
    )
}

export default Form
