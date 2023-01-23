import * as React from "react";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from "@mui/material/Stack";
import { useState } from "react";
export default function UploadButtons() {
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
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        sx={{
          backgroundColor: "#017EFA",
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
          onChange={handleChange}
        />
      </Button>

      {preview && 

        <div>
             <img
             style={{
               width: "120px",
               height: "110px",
               objectFit: "contain",
               position: "absolute",
               left: "10vw",
               top: "-10vh",
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
             position: "absolute",
             left: "20vw",
             top: "-4vh",
             fontWeight: "900",
           }}
         >
           X
         </Button>

         </div>
       }

     

     
    </Stack>
  );
}
