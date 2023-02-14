import React from 'react'

const Header = () => {
  return (
    <div className='mainheader'>
        <div className="leftheader">
            <a href="/">Cryto_Hunter</a>
        </div>
        <div className="rightheader">
            <a href="/List">List</a>
            <a href="/">Home</a>
            <a href="/List">Prices</a>
        </div>
    </div>
  )
}

export default Header;