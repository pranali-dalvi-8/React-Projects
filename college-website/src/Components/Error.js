import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
        <h1>Error 404!</h1>
        <p>The page you are looking for is not found.</p>
        <div>
            <Link to="/">Go To Home</Link><br/>
            <Link to="/about">Go To About</Link><br/>
            <Link to="/campus">Go To Campus</Link><br/>
            <Link to="/placements">Go To Placements</Link><br/>
        </div>
    </div>
  )
}

export default Error;
