import React, { useState } from 'react'
import './help.css';
import Sidebar1 from '../../components/sidebar1/Sidebar1';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Modal } from '@mui/material';
import { Popover } from '@mui/material';
import BasicModal from '../../components/Popup/BasicModel';
import BasicModel from '../../components/Popup/BasicModel';
import Helpdata from './Helpdata';

export default function Help() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      <Sidebar1/>
    <div className='hrect'></div>
    <div className='helprect'> 
          <div className='inf'>
            <BasicModel name={Helpdata.name1} paragraph={Helpdata.des1}/>
          </div>
          <div className='inf'>
            <BasicModel name={Helpdata.name2}  paragraph={Helpdata.des2}/>
          </div>
          <div className='inf'>
            <BasicModel name={Helpdata.name3}  paragraph={Helpdata.des3}/>
          </div>
          <div className='inf'>
            <BasicModel name={Helpdata.name4}  paragraph={Helpdata.des4}/>
          </div>
          <div className='inf'>
          <div onClick={handleClickOpen('paper')}>FAQs</div>
          <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle>FAQs</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <strong>1. Where is D frame Registered?<br/></strong>
         1. The D frame Foundation is registered in the Hague, Netherlands. <br/>

         <strong>2. What is D frame?<br/></strong>
         2.  D-frame is a decentralised data ecosystem to help people monetise their personal data with privacy, 
         support businesses with dynamic value laden data and encourage developers to build for re-imagining the data ecosystem. 
         Using Blockchain based smart contracts for trust and a D-frame token for value generation & distribution, the ecosystem 
         aspires to be a community driven sustainable effort.<br/>

         <strong>3.What is Ad frame? <br/></strong>
         3. Ad-frame is an advertising platform built on D frame, to help clients target users better. 
         Through advanced functionalities like real time target audience analytics with matching interests and a general 
         willingness to watch ads from the users, we hope for significantly higher Click Through Rates (CTR) through AD-frame.<br/>

         <strong>4. How many users does D frame have?<br/></strong>
         4. Currently, D frame is at the prototype stage. Further, we would plan for an Alpha release for 50,000 to 100,000 users. 
         Long term, a user base of atleast 10 million plus users is targeted.<br/>

         <strong>5. How many Clients use D frame? How can Clients be successful on D frame? <br/></strong>
         5. Currently, D frame is at the Prototype stage and we do not have active partnership with any client. 
         However, we are pursuing partnerships with some of the largest Advertising firms in the world.<br/>

         <strong>6. How does D frame compare to other Advertising platforms?<br/></strong>
         6. D frame shows an active data pool size of all the relevant users. 
         Further, User's are willing to view advertisements for making passive income for sharing their data. 
         Finally, we would be working on integration with different metaverse platforms.<br/>

         <strong>7. How much money do users make?<br/></strong>
         7.Currently, we hope to atleast share 50% of the revenue generated directly with the users. 
         Based on community feedback and stakeholder dynamics, these numbers will evolve.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Close</Button>
          
        </DialogActions>
      </Dialog>
            </div>    
          
    </div>
    
    </div>
    
  )
}

