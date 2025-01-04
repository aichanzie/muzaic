import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  Opacity,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Fade,
  MobileStepper,
  Paper,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

const stepperContent = [
  "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg",
  "https://images.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg",
  //   "Stepper 4",
  //   "Stepper 5",
  //   "Stepper 6",
];

export default function PageCarousels() {
  const themeMode = useTheme();
  return (
    <div className="container" style={{ maxHeight: "70vh" }}>
      <Carousel
        autoPlay={true}
        interval={3000}
        // timeout={1000}
        fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
        animation="slide"
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "transparent",
            color: themeMode.palette.text.primary,
            // opacity: ,
            // width: "5vw",
            // height: "70vh",
            display: "none",
            borderRadius: "0px !important",
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            top: "20%",
            margin: 0,
          },
        }}
        NextIcon={<ArrowForwardIosRounded style={{ fontSize: "4.5rem" }} />} // Change the "inside" of the next button to "next"
        PrevIcon={<ArrowBackIosNewRounded style={{ fontSize: "4.5rem" }} />} // Change the "inside of the prev button to "prev"
        navButtonsAlwaysVisible={true} // boolean to make the navigation button visible
      >
        {stepperContent.map((step, index) => (
          <Paper
            key={index}
            style={{
              height: "65vh",
              width: "100vw",
              margin: "auto",
              overflow: "hidden",
            }}
            elevation={0}
          >
            <Box
              component="img"
              src={step}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></Box>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}
