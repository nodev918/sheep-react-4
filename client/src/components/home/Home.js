import React from 'react'
import Card from './Card'
import Limitpost from './Limitpost'
import Recommand from './Recommand'
import './home.css'


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-case">
        <div className="home-case-left">
        <Limitpost />
        <Card />
        </div>
        <div className="home-case-right">
          <Recommand />
        </div>
      </div>

      
    </div>
  )
}
