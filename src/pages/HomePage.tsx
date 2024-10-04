import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Padding } from '@mui/icons-material';

interface Theme {
    primaryColor: string;
    accentColor: string;
    tertiaryColor: string;
    textColor: string;
}

interface HomePageProps {
  theme: Theme;
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: theme.primaryColor,
        border:'none',
        boxShadow:'none',
        borderRadius: '20px',
        height: "100vh",
        maxWidth: "60vw",
        color:theme.textColor,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to My Personal Website
      </Typography>
      <Typography variant="h5" gutterBottom>
        Click below to see a few of my favorite projects.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/projects')}
        style={{ marginTop: '50px', backgroundColor: theme.accentColor, color:theme.textColor, marginBottom:'400px'}}
      >
        View My Projects
      </Button>
      <div>
      <Typography style={{position:'relative', top:'80px'}}>
        Built using
      </Typography>
        <img src ="/react.png" width={50} height={50} style={{position:'relative', top:'80px', padding:'20px'}} alt=''></img>
        <img src ="/flask.png" width={100} height={50} style={{position:'relative', top:'80px',padding:'20px'}}alt=''></img>
        <img src ="/MUI.svg" width={50} height={50} style={{position:'relative', top:'80px', padding:'20px'}}alt=''></img>
      </div>


    </Paper>
  );
};

export default HomePage;
