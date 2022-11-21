import React from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import './survey.css';

export default function Survey() {
  return (
    <div>
      <Sidebar1/>
      <div className='title'>Survey</div>
      <div>
        <div className='surect1'>Which fruit do you like?
        <button className='subtn1'>Apple</button>
        <button className='subtn2'>Orange</button>
        </div>
        <div className='surect2'>Which fruit do you like?<button className='subtn1'>Apple</button><button className='subtn2'>Orange</button></div>
        <div className='surect3'>Which fruit do you like?<button className='subtn1'>Apple</button><button className='subtn2'>Orange</button></div>
        <div className='surect4'>Which fruit do you like?<button className='subtn1'>Apple</button><button className='subtn2'>Orange</button></div>
        <div className='surect5'>Which fruit do you like?<button className='subtn1'>Apple</button><button className='subtn2'>Orange</button></div>
        <div className='surect6'>Which fruit do you like?<button className='subtn1'>Apple</button><button className='subtn2'>Orange</button></div>
      </div>
      
      </div>
  )
}
