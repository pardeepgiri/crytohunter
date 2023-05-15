import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className='mainheader'>
        <div className="leftheader">
            {/* <a href="/">Cryto_Hunter</a> */}
            <Link to="/">Cryto_Hunter</Link>
        </div>
        <div className="rightheader">
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
            <Link to="/list">Prices</Link>
        </div>
    </div>
  )
}

export default Header;
