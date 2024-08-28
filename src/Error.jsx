import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css';

export default function Error() {
  return (
    <div className="Error-container">
        <div className="team-container">
          <div className='Error-Link'>
                <h1>Unfortunately the Link address is not found</h1>
                <Link to='/'>Go to Home Page</Link>
          </div>
        </div>
    </div>
  )
}
