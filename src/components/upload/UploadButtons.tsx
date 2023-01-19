import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadButtons(props:{name:string}) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" sx={{textTransform: 'none',bgcolor:'#017EFA',width:'15vw',height:'7vh',fontSize:'18px',borderRadius:"10px"}}>
        {props.name}
        <input hidden accept="image/*" multiple type="file" />
      </Button>
     
    </Stack>
  );
}