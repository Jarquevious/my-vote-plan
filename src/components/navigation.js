import React from 'react';


const navigation = props => {
    return (
        <div> 
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
};

export default navigation