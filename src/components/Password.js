import { useDispatch } from 'react-redux'
import React, { useState} from 'react'


function Password() {
    const dispatch = useDispatch()
    const [password, setPassword] = useState()

    return(
    <div>
        <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
    </div>)
  }

  export default Password