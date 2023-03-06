import { Container, Box, Divider } from '@mui/material'
import Sidebar1 from '../../../components/sidebar1/Sidebar1'
import './sitedistribution.css'
import { useState } from 'react'
import Charts2 from '../../../components/charts/Charts2/Charts2'
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '../../../components/sidebar1/Drawer'
var a: any[]=[];
const Crypto=[
  {name:'Bitcoin',per:35,value: 35,col:'#361495'},
  {name:'Ethereum',per:35,value: 35,col:"#7518A1"},
  {name:'Polygon',per:30,value: 30,col:"#017EFA"},
  {name:'Solana',per:30,value: 30,col:'#0B3B82'},
  {name:'Hyperledger',per:30,value: 30,col:'#6D3277'},
];
const Gender=[
  {name:'Male',per:46,value: 300,col:'#361495'},
  {name:'Female',per:46,value: 300,col:"#7518A1"},
  {name:'others',per:8,value: 50,col:"#017EFA"}
];
const Agegroup=[
  {name:'>18',per:43,value: 300,col:'#361495'},
  {name:'25-40',per:43,value: 300,col:"#7518A1"},
  {name:'41-60',per:7,value: 50,col:"#017EFA"},
  {name:'<60',per:7,value: 50,col:'#0B3B82'}
];
const sports=[
  {name:'Football',per:40,value: 300,col:'#361495'},
  {name:'Cricket',per:40,value: 300,col:"#7518A1"},
  {name:'Hockey',per:7,value: 50,col:"#017EFA"},
  {name:'Kabbadi',per:7,value: 50,col:'#0B3B82'},
  {name:'Badmiton',per:7,value: 50,col:'#6D3277'}
];
const SocialMedia=[
  {name:'Instagram',per:35,value: 300,col:'#361495'},
  {name:'Meta',per:29,value: 250,col:"#7518A1"},
  {name:'Reddit',per:24,value: 200,col:"#017EFA"},
  {name:'Linkedin',per:12,value: 100,col:'#0B3B82'}
];
const Finance=[
  {name:'Muthoot',per:33,value: 33},
  {name:'Mahindra',per:33,value: 33},
  {name:'HDFC',per:22,value: 22},
  {name:'EasyLoan',per:11,value: 11}
];
var a: any[];

 function SiteDistribution() {
  const ma = useMediaQuery('(min-width:880px)');
 var h11:number = 280;
 var w11:number =700;
 const [toggleState,setToggleState] = useState(3);
  const toggleTab = (index: void |any) =>{
    setToggleState(index);
  }
  if (toggleState === 3 ){
    ( a = Crypto);
  }
  else if (toggleState === 4){
    (a = Gender);
   
  }
  else if (toggleState === 5){
    (a = Agegroup);
  }
  else if (toggleState === 6){
    (a = sports);
  }
  else if (toggleState === 7){
    (a = SocialMedia);
  }
  else if (toggleState === 8){
    (a = Finance);
  }

  const COLORS = ["#361495", , , ""]
  return (
    <div>
   <>{Sidebar1(6)}</>
   <a className='smopen'>
    {Drawer(6)}
    </a>
  
 
    <div className='sites'>
      
      <div onClick={()=> toggleTab(3)} className={toggleState === 3? "cryptoactive":"crypto"}>Crypto</div>
      <Divider variant='middle' orientation='vertical' light={true}/>
      <div onClick={()=> toggleTab(4)} className={toggleState === 4? "cryptoactive":"crypto"}>Gender</div>
      <Divider variant='middle' orientation='vertical' light={true}/>
      <div onClick={()=> toggleTab(5)} className={toggleState === 5? "cryptoactive":"crypto"}>Age Group</div>
      <Divider variant='middle' orientation='vertical' light={true}/>     
      <div onClick={()=> toggleTab(6)} className={toggleState === 6? "cryptoactive":"crypto"}>Sports</div>
      <Divider variant='middle' orientation='vertical' light={true}/>
      <div onClick={()=> toggleTab(7)} className={toggleState === 7? "cryptoactive":"crypto"}>Social Media</div>
      <Divider variant='middle' orientation='vertical' light={true} />
      <div onClick={()=> toggleTab(8)} className={toggleState === 8? "cryptoactive":"crypto"}>Finance</div>
    </div>
  <Box className='sdbox1'>
    <div className='topic'>Site Distribution</div>
  <div className='sdchart'>{Charts2(a,"per",h11,w11,ma)}</div>
   </Box>
   <Box className='sdbox2'>
   <span> {
           a.map(item=>{
              return (<>
              <div className='gap'>
              <a className='legendcolor'style={{background: `${item.col}`}}></a>
                {item.name}
               <a className='gap1'>{item.per + " %"}</a> 
               
              </div>
              <Divider/></>
              );
              
            })
            }</span><br/>
       
   </Box>
   
   </div>
  )
}

export default SiteDistribution;