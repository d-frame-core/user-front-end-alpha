import React from "react";
import { Box } from "@mui/material";
import "./learnmore.css";
import Sidebar from "../../components/sidebar1/Sidebar1";
import BasicModel from "../../components/Popup/BasicModel";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Divider,
} from "@mui/material";
import axios from "axios";
import ModalWithLink from "../../components/ModalWithLink/ModalWithLink";
import Sidebar1 from "../../components/sidebar1/Sidebar1";
import Drawer from "../../components/sidebar1/Drawer";
import Header from '../../components/Header/Header'

export default function LearnMore() {
  const [fetchedData, setFetchedData] = React.useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [faqData, setFaqData] = React.useState<any[]>([]);
  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  async function fetchDataFromBackend() {
    await axios
      .get("http://localhost:3000/Learnmore")
      .then((res) => {
        setFetchedData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchFAQs() {
    await axios
      .get("http://localhost:3000/F&Q/faq/")
      .then((res) => {
        setFaqData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    fetchDataFromBackend();
  }, []);
  React.useEffect(() => {
    // console.log(fetchedData);
  }, [fetchedData]);
  React.useEffect(() => {
    fetchFAQs();
  }, []);
  React.useEffect(() => {
    // console.log(faqData);
  }, [faqData]);
  return (
    <div>
      <Header/>
      <>{Sidebar1(0)}</>
      <a className='smopen'>
        {Drawer(0)}
      </a>
      <div className="learnBox">
        <Box>
          <div className="learnTitle">Learn More</div>
          <div className="learnContent">
            {fetchedData.map((item) =>
              item.title !== "How does campaigns pricing work?" ? (
                <div className="learnItemContent">
                  <BasicModel name={item.title} paragraph={item.text} />
                </div>
              ) : (
                <div className="learnItemContent">
                  <ModalWithLink
                    name={item.title}
                    paragraph={item.text}
                    webLink="https://dframe.org/white-paper-v1-1/"
                    webLinkName="White Paper :  "
                  />
                </div>
              )
            )}
            <div
              className="learnItemContent"
              onClick={handleClickOpen("paper")}
            >
              FAQs
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle>FAQs</DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  {faqData.map((item) => (
                    <div>
                      <strong>
                        {item.question}
                        <br />
                      </strong>
                      <Divider />
                      {item.answer}
                      <br />
                      <br />
                    </div>
                  ))}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button onClick={handleClose} className="btncl1">
                  Close
                </button>
              </DialogActions>
            </Dialog>
          </div>
        </Box>
      </div>
    </div>
  );
}
