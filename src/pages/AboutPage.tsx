import React from 'react';
import { Typography, Paper } from '@mui/material';
interface Theme {
  primaryColor: string;
  accentColor: string;
  tertiaryColor: string;
  textColor: string;
}

interface AboutPageProps{
  theme: Theme;
}
const AboutPage: React.FC<AboutPageProps> = ({theme}) => {
  return (
    <>
      <Paper
        elevation={3}
        style={{
          padding: '50px',
          backgroundColor: theme.primaryColor,
          boxShadow:'none',
          border:'none',
          height: '100vh',
          width: '50vw',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" style={{textAlign:'left'}}>
          My name is Kenechukwu (KC) Achukwu, and I am a 4th-year Computer Science student passionate about software development. 
          I've built this site to showcase a few of my favorite projects but have many more you can view on my Github linked in
           the navigation bar. If you have any questions or would like to reach me for any reason, my LinkedIn is also linked above 
           or you may send me a message through the contact page.
        </Typography>
      </Paper>

      
    </>
  );
};

export default AboutPage;
