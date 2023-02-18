import React, { useState } from "react";
import Sidebar1 from "../../../components/sidebar1/Sidebar1";
import "./survey.css";
import { Box } from "@mui/system";
import surveydata from "./surveydata";
import Divider from "@mui/material/Divider";
import questions from "./question";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "15vh",
  left: "27vw",
  width: "50vw",
  height:"60vh",
  bgcolor: " #E3DAF6",
  boxShadow: 24,
  p: 4,
};

const Survey1: any[] = [
  { qs1: "Is amazon user friendly?", an1: "Yes", an2: "No" },
  { qs1: "Would you recommend us to others?", an1: "Yes", an2: "No" },
  {qs1: "Are you satisfied with our products/services?", an1: "Yes",an2: "No",},
  {qs1: "Have you used our [product or service] before?",an1: "Yes",an2: "No",},
  {qs1: "Will you be dissatisfied if we shut down our service ?", an1: "Yes", an2: "NO",},
];

const Survey2: any[] = [
  { qs2: "Are we user friendly?", an1: "Yes", an2: "No" },
  { qs2: "Will you prefer us over others?", an1: "Yes", an2: "No" },
  { qs2: "Would you recommend us to others?", an1: "Yes", an2: "No" },
  { qs2: "Are you satisfied with oure services?", an1: "Yes", an2: "No" },
  {qs2: "Have you used a similar [product or service] before?",an1: "Yes",an2: "No",},
];

const Survey3: any[] = [
  { qs3: "Are we user friendly?", an1: "Yes", an2: "No" },
  { qs3: "Where did you first hear about us?", an1: "Online", an2: "TV" },
  {qs3: "How would you describe us in one word?", an1: "Best",an2: "Average",},
  {qs3: "Are you satisfied with our products/services?",an1: "Yes",an2: "No",},
  {qs3: "What convinced you to buy the product?",an1: "Lower Price",an2: "Better Quality",},
];

export default function Survey() {
  const [dft, setDFT] = useState(10);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [arrayIndex1, setArrayIndex1] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleOpen2 = () => setOpen(true);
  const handleOpen3 = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var newqs: any = questions;

  const optionClicked = () => {
    setDFT(dft + 1);
    setArrayIndex(arrayIndex + 1);
  };

  const optionClicked1 = () => {
    setArrayIndex1(arrayIndex1 +1);
  }

  return (
    <div>
      <>{Sidebar1(9)}</>

      <div className="surbox1"></div>

      <div>
        <div className="surtext1">Survey</div>

        <div className="surect1">
          <p className="surtext2">{newqs[arrayIndex].qs1}</p>
          <button className="subtn1" onClick={optionClicked}>{newqs[arrayIndex].an1}</button>
          <button className="subtn2" onClick={optionClicked}>{newqs[arrayIndex].an2}</button>
        </div>

        <Box className="surect2">
          <p>Total Survey Answer &emsp;&emsp;&emsp; {arrayIndex + 1} </p>
          <p>Total DFT Earned &emsp;&emsp;&emsp;&emsp;&nbsp; {dft}</p>
        </Box>

        <div>
          <Button onClick={handleOpen1} className="surbtn">Survey 1</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" className="surtitle">Amazon Survey</Typography>
                  <p className='insurtext'>{Survey1[arrayIndex1].qs1}</p>
                  <button className='insurbtn1' onClick={optionClicked1}>{Survey1[arrayIndex1].an1}</button>
                  <button className='insurbtn2' onClick={optionClicked1} >{Survey1[arrayIndex1].an2}</button>
            </Box>
          </Modal>
        </div>

         <div>
          <Button onClick={handleOpen2} className="surbtn">Survey 2</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">OnePlus Survey</Typography>
                  <p className='surtext2'>{Survey2[arrayIndex1].qs2}</p>
                  <button className='subtn1' onClick={optionClicked1}>{Survey2[arrayIndex1].an1}</button>
                  <button className='subtn2' onClick={optionClicked1} >{Survey2[arrayIndex1].an2}</button>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen3} className="surbtn">Survey 3</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">Google Survey</Typography>
                  <p className='surtext2'>{Survey3[arrayIndex1].qs3}</p>
                  <button className='subtn1' onClick={optionClicked1}>{Survey3[arrayIndex1].an1}</button>
                  <button className='subtn2' onClick={optionClicked1} >{Survey3[arrayIndex1].an2}</button>
            </Box>
          </Modal>
        </div> 

        <Box className="surect3">
          <div text-align="left">
            <h3>More Surveys</h3>
          </div>
          <Divider color="#958B8B" sx={{ height: 2, width: "16vw", margin: "auto" }} />

          <Box className="dbox">
            <div>
              {surveydata.map((item) => {
                return (
                  <div className="databox">
                    <p className="survey"> {item.survey}</p>
                    <p className="dft">{item.DFT}</p>
                    <p className="sitename">{item.By}</p>
                    <p className="datafrom">By:</p>
                    <p className="noques">{item.Questions}</p>
                  </div>
                );
              })}
            </div>
            <button className="subtn3">More</button>
          </Box>
        </Box>
      </div>
    </div>
  );
}