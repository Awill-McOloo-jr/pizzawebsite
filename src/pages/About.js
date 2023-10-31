import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about '>
        <div className='home' >
            <div className='aboutTop' style={{ backgroundImage:`url(${MultiplePizzas})` }} >

            </div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>
                    lorem
                </p>
            </div>
        </div>
    </div>    
  )
}

export default About