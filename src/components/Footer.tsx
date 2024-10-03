import React from 'react';
import { Typography, Grid, Container } from '@mui/material';

interface Theme{
    primaryColor: string;
    accentColor: string;
    tertiaryColor: string;
}

interface FooterProps{
    theme : Theme;
}

const Footer: React.FC<FooterProps> = ({theme}) => {
  return (
    <footer
      style={{
        backgroundColor: theme.accentColor,
        color: 'white',
        padding: '20px 0',
        marginTop:"30px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body1">
              © {new Date().getFullYear()} My Personal Website
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
