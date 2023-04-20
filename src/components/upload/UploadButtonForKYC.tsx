import * as React from "react";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { useState } from "react";
import axios from "axios";
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

const onSum = (event:any) =>{
  event.preventDefault();
  const formData = new FormData();
    axios.post("http://localhost:3000/uploads/uploadProfilePicture",formData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

  return (
    <div>
      <form >

      <input
          type="file"
          onChange={handleChange}
          required
        />
      <button
        style={{
          backgroundColor:  preview ? "rgba(92, 15, 255, 0.66)":  "#017EFA",
          borderRadius: "10px",
          textTransform: "inherit",
          width: "100px",
        }}
        type="submit"  
        onClick={onSum}
      >
       Upload
      </button>

     
           {/* <Button
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
         </Button> */}

      

      </form>

     
    </div>
  );
}