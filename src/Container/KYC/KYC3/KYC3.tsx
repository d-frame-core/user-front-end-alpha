import { Box, Step, StepLabel, Stepper, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar1 from "../../../components/sidebar1/Sidebar1";
// import HorizontalLabelPositionBelowStepper from '../../../components/stepper/HorizontalLabelPositionBelowStepper'
import UploadButtonForKYC from "../../../components/upload/UploadButtonForKYC";
import CaptureButtons from "../../../components/upload/CaptureButton";
import data from "../data";
import "./kyc3.css";
import df from "../../../assets/dframe.png";
import Drawer from "../../../components/sidebar1/Drawer";

export default function KYC3() {
  return (
    <Container>
      <Sidebar1 />
      <a className='smopen'>
        {Drawer(0)}
      </a>
      <Box className="ky2rectangle">
        <div className="level">KYC Level-3:</div>
        <div className="k0" style={{ fontSize: "24px", fontWeight: 500 }}>
          Photo:
          <br />
          <span style={{ fontSize: "0.9rem", fontWeight: 400 }}>
            Please pose while holding Photo ID in your hand to make it readable.
          </span>
          <div className="up">
            <CaptureButtons />
            
          </div>
        </div>
        <div className="k1" style={{ fontSize: "24px", fontWeight: 500 }}>
          Government Verification 1:
          <br />
          <span
            style={{ fontSize: "0.9rem", textAlign: "left", fontWeight: 400 }}
          >
            Passport, Aadhar Card, Driving License, Voter ID, PAN Card etc.
          </span>
          <div className="up">
            <UploadButtonForKYC />
            
            <span
              className="Image-warnings"
              style={{ fontSize: "0.8rem", fontWeight: 400 }}
            >
              <span style={{ color: "red" }}>*</span>
              Upload your images less than or equal to
              <b style={{ color: "red" }}> 1 MB</b> in .jpg or .png format
            </span>
          </div>
        </div>
        <div className="k2" style={{ fontSize: "24px", fontWeight: 500 }}>
          Government Verification 2:
          <br />
          <span
            style={{ fontSize: "0.9rem", textAlign: "left", fontWeight: 400 }}
          >
            Electricity Bill, Phone Bill etc.
          </span>{" "}
          <div className="up">
            <UploadButtonForKYC />
            <span
              className="Image-warnings"
              style={{ fontSize: "0.8rem", fontWeight: 400 }}
            >
              <span style={{ color: "red" }}>*</span>
              Upload your images less than or equal to
              <b style={{ color: "red" }}> 1 MB</b> in .jpg or .png format
            </span>
          </div>
        </div>
        

        <div className="stepper-3">
          
          <Box sx={{ width: "300%" }}>
            <Stepper activeStep={2} alternativeLabel>
              {data.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <NavLink style={{ textDecoration: "none" }} to="/successful">
          <Button
            sx={{
              backgroundColor: "#017EFA",
              borderRadius: "10px",
              textTransform: "inherit",
              width:'100px'
            }}
            variant="contained"
            className="nextbtn"
          >
            Submit
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/kyc2">
          <Button
            sx={{
              backgroundColor: "#017EFA",
              borderRadius: "10px",
              textTransform: "inherit",
              width:'100px'
            }}
            variant="contained"
            className="backbtn"
          >
            Back
          </Button>
        </NavLink>
      </Box>
    </Container>
  );
}
