import React from 'react'
import Linecharts from '../../components/charts/linechart/Linechart'
import Sidebar1 from '../../components/sidebar1/Sidebar1'
import './rewards.css'

export default function Rewards() {
  return (
    <div>
        <Sidebar1/>
      <div className='ReRectangle'>
        <div className='linechart'><Linecharts/></div>
      </div>
        <div className='rerect3'><div className='retext'>Sign in Bonus</div><button className='rebtn1'>Claim</button></div>
        <div className='rerect6'><div className='retext'>Refferel Bonus</div><button className='rebtn1'>Claim</button></div>
        <div className='rerect61'><div className='retext'>Verification Reward</div><button className='rebtn1'>Claim</button></div>    
    </div>
  )
}
