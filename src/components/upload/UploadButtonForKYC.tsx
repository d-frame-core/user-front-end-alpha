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

  const onSum = (event: React.ChangeEvent<HTMLInputElement>) =>{
    event.preventDefault();
    const file = event.target.files![0];

    const formData = new FormData();
    formData.append("image", file);
      axios.post("http://localhost:3000/uploads/uploadProfilePicture",formData)
      .then((response) => {
        console.log(response);
        (window as any).alert("Image Uploaded")
      })
      .catch((error) => {
        console.log(error);
      });
    }

  return (
    <div>
     <Button
      sx={{ backgroundColor:  preview ? "rgba(92, 15, 255, 0.66)":  "#017EFA",
      borderRadius: "10px",
      textTransform: "inherit",
      width: "100px",
    }}
    variant="contained"
    component="label"
    
    >
       Upload

          <input
          hidden
          accept="image/*"
          type="file"
          id="file"
          onChange={onSum}
          required
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
         </div>
         }

     
    </div>
  );
}