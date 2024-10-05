import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FadeInImage from '../components/FadedInImage/FadedInImage.tsx';

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
    <div
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: theme.primaryColor,
        border:'none',
        boxShadow:'none',
        borderRadius: '20px',
        maxHeight:'100vh',
        minHeight:'90vh',
        maxWidth: "60vw",
        color:theme.textColor,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to My Personal Website
      </Typography>
      <Typography variant="h5" gutterBottom>
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. The difference between theory and practice is larger in practice than in theory." {<i>  -   Linus Torvalds</i>}    </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/projects')}
        style={{ marginTop: '5vh', backgroundColor: theme.accentColor, color:theme.textColor, marginBottom:'40vh'}}
      >
        View My Projects
      </Button>
      <FadeInImage src={'/mac.png'} alt={''} height={'60%'} width={'40%'} top={'40vh'} left={'30vw'}/>
      <div>
      <Typography style={{position:'absolute', top:'91%',left:'48%'}}>
        Built using
      </Typography>
      <FadeInImage src={'/react.png'} alt={'React.js'} height={'50'} width={'50'} top={'95%'} left={'28%'}/>
      <FadeInImage src={'/flask.png'} alt={'Flask'} height={'50'} width={'100'} top={'95%'} left={'47%'}/>
      <FadeInImage src={'/MUI.svg'} alt={'Material-UI'} height={'50'} width={'50'} top={'95%'} left={'66%'}/>

        {/*<img src ="/react.png" width={50} height={50} style={{position:'absolute', top:'92%', left:'28%',padding:'20px'}} alt='React.js'></img>
        <img src ="/flask.png" width={100} height={50} style={{position:'absolute', top:'92%',left:'46%', padding:'20px'}}alt='Flask'></img>
        <img src ="/MUI.svg" width={50} height={50} style={{position:'absolute', top:'92%',left:'66%', padding:'20px'}}alt='Material-UI'></img>
        */}
      </div>

    </div>
  );
};

export default HomePage;
