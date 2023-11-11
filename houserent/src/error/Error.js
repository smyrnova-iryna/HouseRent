// import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({data}) => {
    return (
        <div className='Error-container'>            
            <p>{data.errorMessage}</p>
            <Link to={data.menuPaths.main}>{data.returnMessage}</Link>
        </div>
    )
}

export default Error;