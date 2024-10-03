import React from 'react';
import { Typography, Paper } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '50px',
        backgroundColor: '#fff',
        borderRadius: '20px',
      }}
    >
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
      My name is Kenechukwu (KC) Achukwu, and I am a 4th year Computer Science student passionate about software developement. I've built this site to showcase a few of my favorite projects but have many more you can view on my Github linked in the navigation bar. If you have any questions or would like to reach me for any reason, my LinkedIn is also linked above or you may send me a message through the contact page

      </Typography>
    </Paper>
  );
};

export default AboutPage;
