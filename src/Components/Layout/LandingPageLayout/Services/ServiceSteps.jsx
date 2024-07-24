import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const steps = [
  "Our team can tailor execution to meet your requirements in a timely manner",
  "Our custom-built APIs provide clients access to more than 10 investment assets*",
  "Introduce investment opportunities to investors",
  "We offer a variety of liquidity provisioning services in secondary markets",
  "Provide issuers and investors our experience and insights",
  "Our team can work with you to design solutions that are specific to your mandate and requirements",
];

export const ServiceSteps = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleSliderChange = (event, newValue) => {
    setActiveStep(newValue);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, steps.length - 1)
    );
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className="w-[80%] m-auto p-4">
      <Stepper activeStep={activeStep} alternativeLabel className="mb-4">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="overflow-x-auto mb-4">
        <Slider
          value={activeStep}
          onChange={handleSliderChange}
          aria-labelledby="step-slider"
          min={0}
          max={steps.length - 1}
          valueLabelDisplay="auto"
          step={1}
          marks={steps.map((_, index) => ({
            value: index,
            label: `${index + 1}`,
          }))}
          className="w-full"
          sx={{
            ".MuiSlider-markLabel": {
              fontSize: isSmallScreen ? "0.75rem" : "1rem",
            },
          }}
        />
      </Box>
      <Typography className="mb-4 text-center">{steps[activeStep]}</Typography>
      <Box className="flex flex-col items-center">
        <Box className="flex flex-row w-full justify-between mb-2">
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            className="mr-2"
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
        {activeStep === steps.length - 1 && (
          <Button
            onClick={handleReset}
            variant="contained"
            color="secondary"
            className="mt-4"
          >
            Reset
          </Button>
        )}
      </Box>
    </Box>
  );
};
