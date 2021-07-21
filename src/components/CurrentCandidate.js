import React, { useState } from "react";

function CurrentCandidates() {
    const [CandidatePic, setCandidatePic] = useState("");
    const [data, setData] = useState(null);
  
    // ----------------------------------------------------------------
    async function getCurrentCandidateByZip() {
      
      // ----------------------------------------------------------------
      const key = "AIzaSyCPi_BBmvysukkWehCrXv9eBlN8k2miiF4";
      const path = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}&address=${zip}&electionId=2000&candidates=${photoUrl}`
      
      // ----------------------------------------------------------------

      try {
        console.log(path)
        const res = await fetch(path); // stop !
        const json = await res.json(); // stop !
        console.log("---json---")
        console.log(json); 
        setData(json);
      } catch (err) {
        console.log("---error---")
        console.log(err.message);
      }
    }

  // ----------------------------------------------------------------
  return (
    <div className="CurrentCandidates">
        
        
    </div>
)
}
export default CurrentElections


// curl "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCPi_BBmvysukkWehCrXv9eBlN8k2miiF4&address=851%20california%20st.%20San%20Francisco%20CA&electionId=2021"

{/* <form onSubmit={(e) => {  
          e.preventDefault()
          getCurrentCandidateByZip()
        } }>
          < 
            value={photoURl}
            onChange={ e => setCurrentCandidate(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        { data && data.contests.map( (election) => <p>{election.office}</p>) } */}