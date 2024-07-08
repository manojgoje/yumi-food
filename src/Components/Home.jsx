import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'

const Home = ({handleCount}) => {
  return (
    <div>
        <Hero/>
        <Delivery/>
        <TopPicks handleAdd ={handleCount} />
    </div>
  )
}

export default Home