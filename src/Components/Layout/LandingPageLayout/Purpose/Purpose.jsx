import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import backgroundImage from '../../../../Assets/Images/womanlisten.jpeg'

const steps = [
  {
    label: "Our Team",
    description: `Our Management Teams are high spirited and skilled entrepreneurs who
      have at least 9 years working experience in the financial industry,
      deep knowledge of the financial market and opportunities therein,
      up to date tools and techniques, age long personal reputation of
      company executive and staff, highly knowledgeable workforce and
      dedicated team. All amounts invested shall reflect in an investor's
      dashboard as soon as a client's deposit is approved by the finance
      department.`,
  },
  {
    label: "Our Value",
    description: `Safe Fx manages assets of private individuals, pension plans,
      trust accounts, stakeholders, institutions and investment companies.
      The main priority of our enterprise is the maximum availability of
      our services to the investors of all levels. Due to the
      professionalism of our employees and the introduction of
      cutting-edge crypto market techniques, we manage to provide
      top-quality services at minimal costs.`,
  },
  {
    label: "Our Mission",
    description: `Our mission is to bring smarter financial services to anybody
      regardless of age or Net worth. Our cross-knowledge strength comes
      from our different background as entrepreneurs, legal and financial
      professionals. Vast majority of our partners comes from people with
      experience in the Field of Blockchain Technology and the Ecosystem
      surrounding it. We are an asset management firm, our business
      provides solutions for Private institutions, Banks, cooperate bodies,
      institutional Investors and every day people. We offer investors the
      best modern day Funds management in the global market.`,
  },
];

export const Purpose = ()=> {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-20   min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
      {/* Black overlay with transparency */}
      <div className="relative container mx-auto translate-y-6 px-4 py-8 bg-white bg-opacity-80">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </div>
  );
}
