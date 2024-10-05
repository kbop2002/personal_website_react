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
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: theme.primaryColor,
        border:'none',
        boxShadow:'none',
        borderRadius: '20px',
        maxHeight:'165vh',
        minHeight:'100vh',
        maxWidth: "150vw",
        color:theme.textColor,
        display:'flex',
        flexDirection:'column'
      }}
    >

      {// h2, h5
      }
      <Typography variant="h2" gutterBottom style={{fontSize:'6vh', marginBottom:'7vh'}}>
        Welcome to My Personal Website
      </Typography>
      <Typography variant="h5" gutterBottom style={{fontSize:'2.5vh', marginLeft:'20vw', marginRight:'20vw'}}>
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. The difference between theory and practice is larger in practice than in theory." {<i>  -   Linus Torvalds</i>}    </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/projects')}
        style={{ marginTop: '5vh', backgroundColor: theme.accentColor, color:theme.textColor, marginBottom:'40vh', zIndex:'1', width:'20vw', alignSelf:'center', fontSize:'2vh'}}>
        View My Projects
      </Button>
      <FadeInImage src={'/mac.png'} alt={''} height={'400'} width={'400'} top={'-30%'} left= {isSmallScreen? (window.innerWidth/2):(window.innerWidth/2)-265}/>
      <div>
      <Typography style={{position:'relative', top:'-6vh',left:'0%', marginBottom:'1vw'}}>
        Built using
      </Typography>
      <FadeInImage src={'/react.png'} alt={'React.js'} height={'50'} width={'50'} top={'10px'} left={'0%'}/>
      <FadeInImage src={'/flask.png'} alt={'Flask'} height={'50'} width={'100'} top={'10px'} left={'0%'}/>
      <FadeInImage src={'/MUI.svg'} alt={'Material-UI'} height={'50'} width={'50'} top={'10px'} left={'0%'}/>

        {/*<img src ="/react.png" width={50} height={50} style={{position:'absolute', top:'92%', left:'28%',padding:'20px'}} alt='React.js'></img>
        <img src ="/flask.png" width={100} height={50} style={{position:'absolute', top:'92%',left:'46%', padding:'20px'}}alt='Flask'></img>
        <img src ="/MUI.svg" width={50} height={50} style={{position:'absolute', top:'92%',left:'66%', padding:'20px'}}alt='Material-UI'></img>
        */}
      </div>

    </div>
  );
};

export default HomePage;
