/** @format */

import React, { useContext, useEffect, useRef, useState } from 'react';
import Sidebar1 from '../../../components/sidebar1/Sidebar1';
import './survey.css';
import surveydata from './surveydata';
import questions from './question';
import { Box, display } from '@mui/system';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Backdrop } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Drawer from '../../../components/sidebar1/Drawer';
import Header from '../../../components/Header/Header';
import { useAccount } from 'wagmi';
import { MyContext } from '../../../components/context/Context';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '25vh',
  left: '35vw',
  width: '40vw',
  height: '46vh',
  bgcolor: ' #E3DAF6',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const Survey1: any[] = [
  { qs1: 'Is amazon user friendly?', an1: 'Yes', an2: 'No' },
  { qs1: 'Would you recommend us to others?', an1: 'Yes', an2: 'No' },
  {
    qs1: 'Are you satisfied with our products/services?',
    an1: 'Yes',
    an2: 'No',
  },
  {
    qs1: 'Have you used our [product or service] before?',
    an1: 'Yes',
    an2: 'No',
  },
  {
    qs1: 'Will you be dissatisfied if we shut down our service ?',
    an1: 'Yes',
    an2: 'NO',
  },
];

const Survey2: any[] = [
  { qs2: 'Are we user friendly?', an1: 'Yes', an2: 'No' },
  { qs2: 'Will you prefer us over others?', an1: 'Yes', an2: 'No' },
  { qs2: 'Would you recommend us to others?', an1: 'Yes', an2: 'No' },
  { qs2: 'Are you satisfied with oure services?', an1: 'Yes', an2: 'No' },
  {
    qs2: 'Have you used a similar [product or service] before?',
    an1: 'Yes',
    an2: 'No',
  },
];

const Survey3: any[] = [
  { qs3: 'Are we user friendly?', an1: 'Yes', an2: 'No' },
  { qs3: 'Where did you first hear about us?', an1: 'Online', an2: 'TV' },
  {
    qs3: 'How would you describe us in one word?',
    an1: 'Best',
    an2: 'Average',
  },
  {
    qs3: 'Are you satisfied with our products/services?',
    an1: 'Yes',
    an2: 'No',
  },
  {
    qs3: 'What convinced you to buy the product?',
    an1: 'Lower Price',
    an2: 'Better Quality',
  },
];

export default function Survey() {
  const [formOpen, setFormOpen] = useState(false);
  const [dft, setDFT] = useState(10);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [arrayIndex1, setArrayIndex1] = useState(0);
  const [arrayIndex2, setArrayIndex2] = useState(0);
  const [userSurvey, setUserSurvey] = useState<any>(null);

  const { userDataa } = useContext(MyContext);
  var { address, isConnected }: any = useAccount();
  const [surveyId, setSurveyId] = useState<any>(null);
  const [arrayIndex3, setArrayIndex3] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleOpen2 = () => setOpen(true);
  const handleOpen3 = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
    setOpen3(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep1, setActiveStep1] = React.useState(0);
  const [activeStep2, setActiveStep2] = React.useState(0);
  const totalSteps = 6;
  const totalSteps1 = 6;
  const totalSteps2 = 6;

  var newqs: any = questions;
  const navigate = useNavigate();

  const optionClicked1 = () => {
    setArrayIndex1(arrayIndex1 + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const optionClicked2 = () => {
    setArrayIndex2(arrayIndex2 + 1);
    setActiveStep1((prevActiveStep) => prevActiveStep + 1);
  };
  const optionClicked3 = () => {
    setArrayIndex3(arrayIndex3 + 1);
    setActiveStep2((prevActiveStep) => prevActiveStep + 1);
  };

  const getProgressPercentage = () => {
    return Math.round((activeStep / (totalSteps - 1)) * 100);
  };
  const getProgressPercentage1 = () => {
    return Math.round((activeStep1 / (totalSteps1 - 1)) * 100);
  };
  const getProgressPercentage2 = () => {
    return Math.round((activeStep2 / (totalSteps2 - 1)) * 100);
  };

  async function getLatestSurveyId() {
    const publicAddress =
      localStorage.getItem('userPublicAddress') ||
      userDataa.publicAddress ||
      address;
    await axios
      .get(
        `https://user-backend-402016.el.r.appspot.com/user/api/get-latest-survey/${publicAddress}`
      )
      .then((response) => {
        setSurveyId(response.data.surveyId);
        console.log('surve id is', response.data.surveyId);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function surveyById() {
    await axios
      .get(
        `  https://user-backend-402016.el.r.appspot.com/survey/api/survey-by-id/${surveyId}`
      )
      .then((response) => {
        setUserSurvey(response.data);
        console.log('survey BY ID is', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getLatestSurveyId();
  }, []);

  useEffect(() => {
    if (surveyId) {
      setTimeout(() => {
        surveyById();
      }, 2000);
    }
  }, [surveyId]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const selectedOptions = useRef<Array<string[]>>([]);

  const optionClicked = (option: string) => {
    selectedOptions.current[currentQuestionIndex] =
      selectedOptions.current[currentQuestionIndex] || [];
    selectedOptions.current[currentQuestionIndex].push(option);
    // Copy the previous selected options and add the current option
    if (currentQuestionIndex + 1 < userSurvey.totalQues.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle completion, e.g., show a completion message
      // You can replace the alert with any other suitable action.

      toast.success('Survey Completed! Thank you.');
      setTimeout(() => {
        toast.remove();
      }, 1000);
      setTimeout(() => {
        updateSurveyBackend();
      }, 1000);
    }
  };
  async function updateSurveyBackend() {
    toast.loading('Submitting Survey', { id: '1' });
    const userId = localStorage.getItem('dframeUserId');

    console.log('SELECTED FINAL', selectedOptions);
    let finalOptions = selectedOptions.current;
    let options = [];
    for (let i = 0; i < finalOptions.length; i++) {
      options.push(finalOptions[i][0]);
    }
    const publicAddress =
      localStorage.getItem('userPublicAddress') ||
      userDataa.publicAddress ||
      address;
    // console.log(options);
    await axios
      .post(
        `https://user-backend-402016.el.r.appspot.com/survey/api/update-survey/${surveyId}`,
        {
          options: options,
          userId: userId,
          publicAddress: publicAddress,
        }
      )
      .then((respons) => {
        toast.success('Submitted Survey', { id: '1' });
        console.log('SUCCESFULLY UPDATED', respons);
        setTimeout(() => {
          toast.remove();
          navigate('/profile');
        }, 1000);
      })
      .catch((err) => {
        toast.error('Error Submitting Survey', { id: '1' });
        console.log(err);
        setTimeout(() => {
          toast.remove();
        }, 1000);
      });
  }

  return (
    <div>
      <Header />
      <>{Sidebar1(9)}</>
      <a className='smopen'>{Drawer(9)}</a>

      <div className='surbox1'>
        <a className='stext1'>Survey</a>
      </div>
      {userSurvey && (
        <div>
          <div className='surect1'>
            <p className='surtext2'>
              {userSurvey.totalQues[currentQuestionIndex].title}
            </p>
            {userSurvey.totalQues[currentQuestionIndex].options.map(
              (option: any, index: any) => (
                <button
                  className={`subtn${index + 1}`}
                  key={index}
                  onClick={() => optionClicked(option)}>
                  {option}
                </button>
              )
            )}
          </div>

          <div className='surect2'>
            <p>Total Survey Answer &emsp;&emsp; {currentQuestionIndex + 1} </p>
            <p>Total DFT Rewards &emsp;&emsp;&emsp; {userSurvey.totalReward}</p>
            {/* <p>{surveyId}</p> */}
          </div>
          {/* <Box className='surect3'>
          <div text-align='left'>
            <h3>More Surveys</h3>
          </div>
          <Divider
            color='#958B8B'
            sx={{ height: 2, width: '16vw', margin: 'auto' }}
          />

          <Box className='dbox'>
            <div>
              {surveydata.map((item) => {
                return (
                  <div className='databox'>
                    <p className='dft'>{item.DFT}</p>
                    <p className='sitename'>{item.By}</p>
                    <p className='datafrom'>By:</p>
                    <p className='noques'>{item.Questions}</p>
                  </div>
                );
              })}
            </div>
            <button className='subtn3'>More</button>
          </Box>
        </Box> */}
          {/* <Button
          onClick={handleOpen1}
          className='surbtn1'
          sx={{ textTransform: 'inherit', color: 'black' }}>
          Survey 1
        </Button>
        <Backdrop
          open={open}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          className='backdrop'>
          <Box sx={style}>
            {Survey1.map((item) => {
              return (
                <div>
                  <h1 className='surtitle'>Amazon Survey</h1>
                  <p className='insurtext'>{item.qs1}</p>
                  <button
                    className='insurbtn1'
                    onClick={optionClicked1}>
                    {item.an1}
                  </button>
                  <button
                    className='insurbtn2'
                    onClick={optionClicked1}>
                    {item.an2}
                  </button>
                </div>
              );
            })}
            <React.Fragment>
              <MobileStepper
                variant='progress'
                steps={6}
                position='static'
                activeStep={activeStep}
                sx={{
                  position: 'absolute',
                  width: 300,
                  display: 'flex',
                  justifyContent: 'center',
                  top: '44vh',
                  left: '5vw',
                  borderRadius: 8,
                  '& .MuiMobileStepper-progress': {
                    backgroundColor: 'light-blue',
                    borderRadius: 8,
                    height: 10,
                    margin: 'auto',
                    width: '85%',
                    left: '-5%',
                  },
                }}
                backButton={undefined}
                nextButton={undefined}
              />
              <Typography
                align='center'
                className='insurper'>
                {getProgressPercentage()}%
              </Typography>
            </React.Fragment>
          </Box>
          <Button
            onClick={handleClose}
            className='closeButton'
            variant='contained'
            sx={{ textTransform: 'inherit' }}>
            Close
          </Button>
        </Backdrop>

        <Button
          className='surbtn2'
          onClick={() => setOpen2(true)}
          sx={{ textTransform: 'inherit', color: 'black' }}>
          Survey 2
        </Button>
        <Backdrop
          open={open2}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          className='backdrop'>
          <Box sx={style}>
            {Survey2.map((item) => {
              return (
                <div>
                  <h1 className='surtitle'>OnePlus Survey</h1>
                  <p className='insurtext'>{Survey2[arrayIndex2].qs2}</p>
                  <button
                    className='insurbtn1'
                    onClick={optionClicked2}>
                    {Survey2[arrayIndex2].an1}
                  </button>
                  <button
                    className='insurbtn2'
                    onClick={optionClicked2}>
                    {Survey2[arrayIndex2].an2}
                  </button>
                </div>
              );
            })}
            <React.Fragment>
              <MobileStepper
                variant='progress'
                steps={6}
                position='static'
                activeStep={activeStep1}
                sx={{
                  position: 'absolute',
                  width: 300,
                  display: 'flex',
                  justifyContent: 'center',
                  top: '44vh',
                  left: '5vw',
                  borderRadius: 8,
                  '& .MuiMobileStepper-progress': {
                    backgroundColor: 'light-blue',
                    borderRadius: 8,
                    height: 10,
                    margin: 'auto',
                    width: '85%',
                    left: '-5%',
                  },
                }}
                backButton={undefined}
                nextButton={undefined}
              />
              <Typography
                align='center'
                className='insurper'>
                {getProgressPercentage1()}%
              </Typography>
            </React.Fragment>
          </Box>
          <Button
            onClick={handleClose}
            className='closeButton'
            variant='contained'
            sx={{ textTransform: 'inherit' }}>
            Close
          </Button>
        </Backdrop>

        <Button
          className='surbtn3'
          onClick={() => setOpen3(true)}
          sx={{ textTransform: 'inherit', color: 'black' }}>
          Survey 3
        </Button>
        <Backdrop
          open={open3}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          className='backdrop'>
          <Box sx={style}>
            {Survey3.map((item) => {
              return (
                <div>
                  <h1 className='surtitle'>Google Survey</h1>
                  <p className='insurtext'>{Survey3[arrayIndex3].qs3}</p>
                  <button
                    className='insurbtn1'
                    onClick={optionClicked3}>
                    {Survey3[arrayIndex3].an1}
                  </button>
                  <button
                    className='insurbtn2'
                    onClick={optionClicked3}>
                    {Survey3[arrayIndex3].an2}
                  </button>
                </div>
              );
            })}
            <React.Fragment>
              <MobileStepper
                variant='progress'
                steps={6}
                position='static'
                activeStep={activeStep2}
                sx={{
                  position: 'absolute',
                  width: 300,
                  display: 'flex',
                  justifyContent: 'center',
                  top: '44vh',
                  left: '5vw',
                  borderRadius: 8,
                  '& .MuiMobileStepper-progress': {
                    backgroundColor: 'light-blue',
                    borderRadius: 8,
                    height: 10,
                    margin: 'auto',
                    width: '85%',
                    left: '-5%',
                  },
                }}
                backButton={undefined}
                nextButton={undefined}
              />
              <Typography
                align='center'
                className='insurper'>
                {getProgressPercentage2()}%
              </Typography>
            </React.Fragment>
          </Box>
          <Button
            onClick={handleClose}
            className='closeButton'
            variant='contained'
            sx={{ textTransform: 'inherit' }}>
            Close
          </Button>
        </Backdrop> */}
        </div>
      )}
      {!userSurvey && (
        <div
          style={{
            position: 'absolute',
            top: '30vh',
            left: '40vw',
            fontSize: '6vh',
          }}>
          No survey found for you
        </div>
      )}
    </div>
  );
}
