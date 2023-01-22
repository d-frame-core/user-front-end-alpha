import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Webcam from 'react-webcam';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useRef} from "react";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CaptureButtoms() {


  const webcam = useRef<Webcam>(null);

 
  

  const [open, setOpen] = React.useState(false);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ color:'whitesmoke',backgroundColor:'#017EFA', borderRadius:'10px',textTransform:'inherit',width:'100px'}} variant="contained" component="label" onClick={handleClickOpen}>
        Capture
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Capture Image
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
          
        </AppBar>
        
        <Webcam style={{margin:'auto 5rem'}} width={1000} height={600}  screenshotFormat="image/jpeg" ref={webcam}/>
        <div style={{position:'absolute', top:'20rem', right:"1.5rem"}}>Please pose while holding Photo ID in your hand to make it readable.</div>
        <Button variant='contained' 
        
           
        
        sx={{
          position:'absolute' , 
          bottom:"10rem" , 
          right:'13rem',
          backgroundColor:'#017EFA', borderRadius:'10px',textTransform:'inherit',width:'100px'
          
          }}>Capture</Button>
        

      </Dialog>
    </div>
  );
}
