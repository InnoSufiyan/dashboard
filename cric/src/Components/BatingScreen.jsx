import React from 'react'
import "./BatingScreen.css"
const BatingScreen = () => {
    return (
        <div className="batingMainBox">

            <div className="heading">
                <h3>India tour to  Aus </h3>
            </div>

            <section className="scorenBox">
                <section className="innerbOx">

                <div className="team1Box">
                        <p>Pakistan</p>
                        <h1>176 / 8 *</h1>

                </div>

                    <div className="vsbox">
                        <h1>VS</h1>
                    </div>

                <div className="team2Box">
                <p>India</p>

                <h1>176 / 8 *</h1>


                </div>

                </section>
                <div className="det">
                    India need 35 runs  in 19 balls to win
                </div>

                <div className="DetailsBox">
                    
                    <div className="batingBOx">
                        <h1>BATTING</h1>
                    <h1>jaffar aman</h1>
                         <p>34*</p>   
                        
                         <h1>Inno sufiyan</h1>
                         <p>34*</p>   
                        
                    </div>     

                    <div className="bowingBox">
                    <h1>Bowling</h1>
                    <h1>jaffar aman</h1>
                         <p>34*</p>   
                        
                         <h1>Inno sufiyan</h1>
                         <p>34*</p>   
                            
                    </div>                
                </div>
    


            </section>



        </div>

    )
}

export default BatingScreen


