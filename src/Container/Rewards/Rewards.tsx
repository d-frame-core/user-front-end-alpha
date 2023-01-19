import React, { useState } from 'react'
import Linecharts from '../../components/charts/linechart/Linechart'
import Sidebar1 from '../../components/sidebar1/Sidebar1'
import './rewards.css'
import { Box, Container,Divider } from '@mui/material'
import Linechart from '../../components/charts/linechart/Linechart'

const rewarddata: any[]=[
  { name: "All", value: 4300,long: 'DFT (earned)' },
  { name: "Browser Data", value: 1020 ,long: 'DFT (earned)'},
  { name: "Verification Rewards", value: 930 ,long: 'DFT (earned)'},
  { name: "Referrals", value: 540 ,long: 'DFT (earned)'},
];

const Daily:any[] = [
  {name:'0',value: 35},
  {name:'4',value: 35},
  {name:'8',value: 13},
  {name:'12',value: 34}, 
  {name:'16',value: 27}, 
  {name:'20',value: 30}, 
  {name:'24',value: 37}, 
]
const Weekly:any[] = [
  {name:'0',value: 35},
  {name:'3',value: 31},
  {name:'6',value: 30},
  {name:'9',value: 20},
  {name:'12',value: 25},
  {name:'15',value: 33},
  {name:'18',value: 22},
  {name:'21',value: 21},
  {name:'24',value: 37},
  {name:'27',value: 56},  
]
const Monthly:any[] = [
  {name:'1',value: 35},
  {name:'2',value: 15},
  {name:'3',value: 10},
  {name:'4',value: 13}, 
]
var ab:any[]=[];


export default function Rewards() {
  const [toggleState,setToggleState] = useState(3);
  const toggleTab = (index: void |any) =>{
    setToggleState(index);
  }
  if (toggleState === 3 ){
    ( ab = Daily);
  }
  else if (toggleState === 4){
    (ab = Weekly);
    console.log('This ')
  }
  else if (toggleState === 5){
    (ab = Monthly);
  }
  return (
    <div>
      <>{Sidebar1(4)}</>
      <div className='rewtitle'>Rewards</div>
      <Container maxWidth={false} sx={{ maxWidth: '70%' }} className="rewcont">  
      <a className="rewhead">Total Rewards Earning in DFT</a>
      
      <div className='linechart'><>{Linechart(ab)}</></div>
      <div onClick={()=> toggleTab(3)} className='btnrewards'>Daily</div>
      <div onClick={()=>setToggleState(4)} className='btnrewards'>Weekly</div>
      <div onClick={()=> toggleTab(5)} className='btnrewards'>Monthly</div>
      
      <Box className='rerect'></Box>
      <Box className='redbox'>
      <span> {
           rewarddata.map(item=>{
              return (<>
              <div className='rgap'>
              {item.name}
              <a className='rgap1'>{item.value}{item.long}</a>
              </div>
             <Divider/></> );
            })
            }</span><br/>
      </Box>
      </Container>
    </div>
  )
}
