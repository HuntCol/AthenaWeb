import React, { useState } from 'react';
import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem, TextField, Button, Grid } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import AppsIcon from '@mui/icons-material/Apps';
import WebIcon from '@mui/icons-material/Web';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  largeTile: {
    border: 'none',
    padding: '8px',
  },
  largePaper: {
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minWidth: '100px',
    minHeight: '150px',
    border: 'none',
    margin: '0 8px',
  },
  toggleButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 'none',
    flexWrap: 'wrap',
  },
  ToggleButton: {
    border: 'none',
  },
});
const App = () => {
  const [primaryColor, setPrimaryColor] = useState('#007bff');
  const [secondaryColor, setSecondaryColor] = useState('#6c757d');
  const [deviceType, setDeviceType] = useState("app");
  const classes = useStyles();

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const renderStep = () => {
    switch (step) {

        
      case 1:
        return (
          <Grid item xs={12}>
            <TextField fullWidth label="Describe your project in simple terms"  sx={{ width: '100%' }} />
          </Grid>
        );
        case 0:
          return (
            <Grid container className={classes.centered} style={{ height: '100%' }}>
              <Grid container alignItems="center" justifyContent="center" style={{ height: '100%' }}>
                <Grid item xs={12} sm={6}>
                  <Typography>What type of device are the designs for?</Typography>
                  <Grid container className={classes.centered}>
                    <ToggleButtonGroup
                      value={deviceType}
                      exclusive
                      onChange={(e, value) => {
                        if (value !== null) {
                          setDeviceType(value);
                          handleNext();
                        }
                      }}
                      aria-label="Device type"
                      className={classes.toggleButtonGroup}
                    >
                      <ToggleButton value="app" aria-label="App" className={classes.ToggleButton}>
                        <Paper elevation={3} className={classes.largePaper}>
                          <AppsIcon fontSize="large" />
                          <Typography variant="subtitle1">App</Typography>
                        </Paper>
                      </ToggleButton>
                      <ToggleButton value="website" aria-label="Website" className={classes.ToggleButton}>
                        <Paper elevation={3} className={classes.largePaper}>
                          <WebIcon fontSize="large" />
                          <Typography variant="subtitle1">Website</Typography>
                        </Paper>
                      </ToggleButton>
                      <ToggleButton value="Tablet" className={classes.ToggleButton}>
                        <Paper elevation={3} className={classes.largePaper}>
                          <WebIcon fontSize="large" />
                          <Typography variant="subtitle1">Tablet</Typography>
                        </Paper>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
    
        case 2:
          return (
              <Grid item xs={12}>
                <TextField fullWidth label="Describe a design style"  sx={{ width: '100%' }} />
              </Grid>
            );
    
        default:
          return null;
      }
    };
      
    return (
      <Container maxWidth="xl" disableGutters>
        <Box display="flex" height="100vh">
          <Box width="33.33%" style={{
            backgroundImage: "url('https://cdn.stability.ai/assets/org-KISilkcM85TbfKx8eJSef7m8/00000000-0000-0000-0000-000000000000/c56ca371-37c3-ab16-5cba-4f9f37d795b3')",
            backgroundSize: "cover",
            height: '100vh',
          }} />
          <Box flexGrow={1} p={4} style={{ backgroundColor: "white" }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              {step > 0 && (
                <IconButton color="secondary" onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              )}
              <div></div>
            </Box>
  
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {renderStep()}
              </Grid>
              <Box mt={4} display="flex" justifyContent="space-between">
                {step > 0 && (
                  <Button variant="text" color="secondary" onClick={handleBack} style={{ display: 'none' }}>
                    Back
                  </Button>
                )}
                {step > 0 && step < 2 && (
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                  </Button>
                )}
                {step === 2 && (
                  <Button variant="contained" color="primary" type="submit">
                    Generate!
                  </Button>
                )}
              </Box>
              </form>
        </Box>
      </Box>
    </Container>
  );
};

export default App;

