import React, { useState } from "react";

// ----------------------------------------------------------------
//                       Voting Location Function
// ----------------------------------------------------------------

function VotingLocation() {
  const [zip, setZip] = useState("");
  const [data, setData] = useState(null);

  // ----------------------------------------------------------------
  async function getLocationByZip() {
    console.log('hey')
    const key = "AIzaSyCPi_BBmvysukkWehCrXv9eBlN8k2miiF4";
    const path =  `GET https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}`;
    try {
      console.log(path)
      const res = await fetch(path); // stop !
      const json = await res.json(); // stop !
      
      console.log(json); 
      const pollingLocation = json.pollingLocations;
      
      

      setData({pollingLocation});
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
      <div className="VotingLocation">
          <h1>Voting Location</h1>
          <form onSubmit={(e) => {  
            e.preventDefault()
            getLocationByZip()
          } }>
            <input 
              value={zip}
              onChange={ e => setZip(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          { data && data.voterinfo.map( (election) => <p>{election.name}</p>) }
      </div>
  )
}
export default VotingLocation