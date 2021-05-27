import React from 'react';
import Button from '@material-ui/core/Button';


const navigation = props => {
    return (
        <div> 
            <Button variant="contained" color="primary" className="" onClick={props.prev}>Previous</Button>
            <Button className="" variant="contained" color="primary" onClick={props.next}>Next</Button>
        </div>
    );
};

export default navigation