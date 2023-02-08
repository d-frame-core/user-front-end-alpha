import * as React from "react";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { useState } from "react";
export default function UploadButtonForKYC() {
  const [preview, setpreview] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    
 const maxAllowed = 1*1024*1024;
    if (event.target.files[0].size > maxAllowed){
      alert("File size is too big");
    }
    else setpreview(event.target.files[0]);
  };

  return (
    <div>
      <Button

       
      
        sx={{
          backgroundColor:  preview ? "rgba(92, 15, 255, 0.66)":  "#017EFA",
          borderRadius: "10px",
          textTransform: "inherit",
          width: "100px",
        }}
        variant="contained"
        component="label"
      >
        {preview ? "Reupload" : "Upload"}
        
        <input
          hidden
          accept="image/*"
          type="file"
          id="file"
          onChange={handleChange}
        />
      </Button>

      {preview && 

        <div style={{position:'absolute',left:'10vw',top:'-10vh'}}>
             <img
             style={{
               width: "120px",
               height: "110px",
               objectFit: "contain",
               
             
             }}
             src={preview === null ? "" : URL.createObjectURL(preview)}
             alt="document preview"
           />
        
           <Button
           onClick={() => {
             setpreview(null);
           }}
           variant="text"
           size="large"
           sx={{
             color:'#fa2a55',
             position:'absolute',
             left:'8rem',
             top:"2.3rem",
             
             fontWeight: "800",
           }}
         >
           X
         </Button>

         </div>
       }

     

     
    </div>
  );
}
