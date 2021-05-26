import React from 'react';

const navigation = props => {
    return (
        <div> 
            <button className="" onClick={props.prev}>Previous</button>
            <button className="" onClick={props.next}>Next</button>
        </div>
    );
};

export default navigation