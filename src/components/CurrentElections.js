import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import "./CurrentElections.css";
import Card from "@material-ui/core/Card";






// ----------------------------------------------------------------
//                       Current Elections
// ----------------------------------------------------------------

function CurrentElections() {
  const [zip, setZip] = useState(30032);
  const [data, setData] = useState(null);

  // ----------------------------------------------------------------
  async function getLocationByZip() {
    
    // ----------------------------------------------------------------
    const key = "AIzaSyCPi_BBmvysukkWehCrXv9eBlN8k2miiF4";
    const path = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}&address=${zip}&electionId=2000`
    
    // ----------------------------------------------------------------
    try {
      // console.log(path)
      const res = await fetch(path); // stop !
      const json = await res.json(); // stop !
      // console.log("---json---")
      // console.log(json); 
      setData(json);
    } catch (err) {
      // console.log("---error---")
      // console.log(err.message);
    }
  }

  // ----------------------------------------------------------------
  return (
      <div className="CurrentElections">
          <p className="EnterZip">Enter zip to see current elections</p>
          <form onSubmit={(e) => {  
            e.preventDefault()
            getLocationByZip()
          } }>
            <TextField
              className="TField"
              id="outlined-secondary"
              variant="outlined"
              outline-offset= "2px"
              color="secondary" 
              value={zip}
              onChange={ e => setZip(e.target.value)}
            />
            <Button className="ZipButton" variant="contained" size="medium" color="primary" type="submit">Search My Elections</Button>

          </form>
          <div class="row">  {/* {console.log(data)} */}
          {data && data.contests.map((election, index) => { 
            console.log(election.candidates)
            return (
             
              <div className="card" class="col-md-4 col-sm-6 col-xs-6" key={index}>
                <p className="card-title"> <div>{election.office}</div></p> 
                <div>
                <ul>

                  {/* {election.candidates.map(candidate => <li>{candidate.name}</li>)} */}
                  {/* {if statement to to see if no candidate, then skip over it} */}
                  {/* if election.candidates !== undefine, then map candidates */}
                  {election.candidates && election.candidates.map((candidate, index) => {
                    return (<List className="card-body" key={index}>{candidate.name}</List>)
                  })}
                </ul></div>
              </div>
             
            )
          }) }
      </div></div>
  )
}
export default CurrentElections


// curl "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCPi_BBmvysukkWehCrXv9eBlN8k2miiF4&address=851%20california%20st.%20San%20Francisco%20CA&electionId=2021"
