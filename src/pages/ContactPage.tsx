import React from 'react';
import { Typography, Paper, TextField, Button } from '@mui/material';

interface Theme {
  primaryColor: string;
  accentColor: string;
  tertiaryColor: string;
  textColor: string;
}

interface ContactPageProps {
  theme: Theme;
}

const ContactPage: React.FC<ContactPageProps> = ({theme}) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: theme.tertiaryColor,
        margin:'50px',
        color:theme.textColor
      }}
    >
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          required={true}
        />
        <TextField
          label="Company"
          fullWidth
          margin="normal"
          variant="outlined"
          required={false}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required={false}
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          required ={true}
        />
        <Button variant="contained" size="large" style={{backgroundColor:theme.accentColor, color:theme.textColor}}>
          Send Message
        </Button>
      </form>
    </Paper>
  );
};

export default ContactPage;
