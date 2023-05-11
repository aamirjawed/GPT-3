import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possiblity' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulegence unpleasing Not thoughts all excersise blessing. Indulegence way everything joy attertion boisterous the attachement. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
} 

export default Possibility