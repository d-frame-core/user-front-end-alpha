import axios from 'axios';
import React from 'react'

export default function Acc() {

    const onSum = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        const file = event.target.files![0];
    
        const formData = new FormData();
        formData.append("image", file);
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
            <input type="file" accept='image/*' id='profilePicture' onChange={onSum}/>
        
        </form>
    </div>
  )
}
