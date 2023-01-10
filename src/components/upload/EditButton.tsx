import { Button, IconButton } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React from 'react'

export default function EditButton() {
  return (
    <IconButton    color="primary" aria-label="upload picture" component="label" sx={{color:'#47B5FF',top:'-5px',left:'15%',position:'relative'}}>
            <input hidden accept="image/*" multiple type="file" />
        <CreateOutlinedIcon />
      </IconButton>
  )
}
