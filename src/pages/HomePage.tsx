import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Theme {
    primaryColor: string;
    accentColor: string;
    tertiaryColor: string;
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
        backgroundColor: theme.tertiaryColor,
        borderRadius: '20px',
        height: "400px",
        maxWidth: "60vw",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to My Personal Website
      </Typography>
      <Typography variant="h5" gutterBottom>
        Click below to see a few of my favorite projects.
      </Typography>
      <img src ="/"></img>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate('/projects')}
        style={{ marginTop: '20px', backgroundColor: theme.accentColor }}
      >
        View My Projects
      </Button>
    </Paper>
  );
};

export default HomePage;
