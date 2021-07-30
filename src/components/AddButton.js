import { useDispatch } from "react-redux"
import { addCandidate } from "../actions"
import React from "react"
 
function AddButton({name}) {
    const dispatch = useDispatch()
    return(
        <button onClick={() => dispatch(addCandidate(name)) }>+ Add Candidate</button>
    )
}

export default AddButton