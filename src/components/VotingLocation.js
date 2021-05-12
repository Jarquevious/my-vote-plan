import React, { useState } from "react";

// ----------------------------------------------------------------
//                       Voting Location Function
// ----------------------------------------------------------------

function VotingLocation() {
  const [zip, setZip] = useState("");
  const [data, setData] = useState(null);

  // ----------------------------------------------------------------
  async function getLocationByZip() {
    const apikey = "AIzaSyBAMzlH6VMCZpxn7UeRrrN3w5UEuzVS-SE";
    const path = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${apikey}`;
    try {
      const res = await fetch(path); // stop !
      const json = await res.json(); // stop !
      console.log(json);

      setData(json);
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
            <button>Submit</button>
          </form>
          { data && data.voterinfo.map( (election) => <p>{election.name}</p>) }
      </div>
  )
}
export default VotingLocation