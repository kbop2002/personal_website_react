import React from 'react';
import { Typography, Paper, TextField, Button } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: '#ECE4B7',
        borderRadius: '20px',
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
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          required
        />
        <Button variant="contained" color="primary" size="large">
          Send Message
        </Button>
      </form>
    </Paper>
  );
};

export default ContactPage;
