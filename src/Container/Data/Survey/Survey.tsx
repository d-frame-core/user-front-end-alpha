import React, { useState } from 'react'
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import './survey.css';
import { Box } from '@mui/system';
import surveydata from './surveydata'
import Divider from '@mui/material/Divider';
import { setSourceMapRange } from 'typescript';
import questions from './question';

const Survey1: any[]=[
  {question1:"Will you be dissatisfied if we shut down our service ?",option1:"Yes",option2:"NO"},
  {question2:"Is amazon user friendly?",option1:"Yes",option2:"No"},
  {question3:"Are you satisfied with our products/services?",option1:"Yes",option2:"No"},
  {question4:"Would you recommend us to others?",option1:"Yes",option2:"No"},
  {question5:"Have you used our [product or service] before?",option1:"Yes",option2:"No"}
]

const Survey2:any[]=[
{question1:"Have you used a similar [product or service] before?",option1:"Yes",option2:"No"},
{question2:"Are we user friendly?",option1:"Yes",option2:"No"},
{question3:"Will you prefer us over others?",option1:"Yes",option2:"No"},
{question4:"Would you recommend us to others?",option1:"Yes",option2:"No"},
{question5:"Are you satisfied with oure services?",option1:"Yes",option2:"No"}
]

const Survey3:any[]=[
{question1:"How would you describe us in one word?",option1:"Best",option2:"Average"},
{question2:"Where did you first hear about us?",option1:"Online",option2:"TV"},
{question3:"What convinced you to buy the product?",option1:"Lower Price",option2:"Better Quality"},
{question4:"Are you satisfied with our products/services?",option1:"Yes",option2:"No"},
{question5:"Are we user friendly?",option1:"Yes",option2:"No"}
]


export default function Survey() {
  const [dft,setDFT] = useState(10);
  const [arrayIndex,setArrayIndex]= useState(0);
  const [com,setcom] = useState(false);
  var newqs:any=questions;
  
  const optionClicked = () => {
    console.log(surveydata.length)
    if(surveydata.length === 10){
        setcom(true);
    }
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
          {!com && <><p className='surtext2'>{newqs[arrayIndex].qs1}</p>
          <button className='subtn1' onClick={optionClicked}>{newqs[arrayIndex].an1}</button>
          <button className='subtn2' onClick={optionClicked}>{newqs[arrayIndex].an2}</button></>}
        {com && <><p className='surtext2'>{newqs.qs2}</p></>}
        </div>
        
        <Box className='surect2'>
          <p>Total Survey Answer&nbsp;&nbsp;: &emsp;&emsp;&emsp; {arrayIndex+1} </p>
          <p>Total DFT Earned&emsp;&emsp;:&emsp;&emsp;&nbsp;&nbsp;&nbsp; {dft}</p>
          </Box>

        <Box className='surect3'>
          <div text-align="left"><h3>More Surveys</h3></div>
          <Divider color="#958B8B" sx={{ height: 2, width: '16vw', margin:'auto' }}/>

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
