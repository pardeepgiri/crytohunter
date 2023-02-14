import React from 'react'

const Footer = () => {
  return (
    <div className='flex'>
        <div className='col'>
            <h2>Support</h2>
            <a href='/'>Chat</a>
            <a href='/'>Help Center</a>
            <a href='/'>Contact Us</a>
        </div>
        <div className='col'>
            <h2 >Learn</h2>
            <a href='/'>Research</a>
            <a href='/'>Cryto Price </a>
            <a href='/'>Cryto Update</a>
        </div>
        <div className='col'>
            <h2 >Company</h2>
            <a href='/'>About</a>
            <a href='/'>Legal</a>
            <a href='/'>Privacy</a>
        </div>

    </div>
  )
}

export default Footer