/** @format */

import Button from '@mui/material/Button';
import React from 'react';
import Webcam from 'react-webcam';

interface State {
  img_src: string;
}

export default class WebcamForKYC extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      img_src: '',
    };
  }

  capture = () => {
    const imageSrc = (this.refs.webcam as Webcam).getScreenshot();
    if (imageSrc) {
      this.setState({ img_src: imageSrc });
    }
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    return (
      <div>
        <div>
          <Webcam
            style={{ margin: '1rem 5rem' }}
            width={850}
            height={600}
            audio={false}
            ref={'webcam'}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}
            onUserMediaError={() => window.alert('cant access your camera')}
          />
        </div>
        <div style={{ position: 'absolute', top: '20rem', right: '1.5rem' }}>
          Please pose while holding Photo ID in your hand to make it readable.
        </div>
        <div>
          <Button
            variant='contained'
            onClick={this.capture}
            sx={{
              position: 'absolute',
              bottom: '10rem',
              right: '13rem',
              backgroundColor: '#017EFA',
              borderRadius: '10px',
              textTransform: 'inherit',
              width: '100px',
            }}>
            Capture
          </Button>
        </div>

        {this.state.img_src && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}>
            <img
              src={this.state.img_src}
              alt='webcam captured pic'
            />
          </div>
        )}
      </div>
    );
  }
}
