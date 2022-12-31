import React, { useState } from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import './survey.css';
import { Box } from '@mui/system';
import surveydata from './surveydata'
import Divider from '@mui/material/Divider';
import { setSourceMapRange } from 'typescript';
import questions from './question';

export default function Survey() {
  const [dft,setDFT] = useState(10);
  const [arrayIndex,setArrayIndex]= useState(0);
  
  var newqs:any=questions;
  
  const optionClicked = () => {
    
      setDFT(dft + 1);
      setArrayIndex(arrayIndex +1);
  }


 
  return (
    <div>
      <>{Sidebar1(9)}</>
      <div className='surbox1'></div>
      <div>
        
      <div className='surtext1'>Survey</div>
        <div className='surect1'>
          <p className='surtext2'>{newqs[arrayIndex].qs1}</p>
        <button className='subtn1' onClick={optionClicked}>{newqs[arrayIndex].an1}</button>
        <button className='subtn2' onClick={optionClicked} >{newqs[arrayIndex].an2}</button>
        </div>
        
        <Box className='surect2'>
          <p>Total Survey Answer {arrayIndex+1} </p>
          <p>Total DFT Earned {dft}</p>
          </Box>

        <Box className='surect3'>
          <div> More Surveys</div>
          <Divider />
          <Box className='dbox'>
          <div>{surveydata.map(item =>{
            return(
              <div className='databox'>
                <p className='survey'> {item.survey}</p>
                <p className='dft'>{item.DFT}</p>
                <p className='sitename'>{item.By}</p>
                <p className='datafrom'>By:</p> 
                <p className='noques'>{item.Questions}</p>
              </div>
            )})}</div> 
            <button className='subtn3'>More</button>
            </Box>
        </Box>

      </div>
      
      </div>
  )
}
