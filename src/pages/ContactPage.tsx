import React, { useState } from 'react';
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

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  // Use state to store form values
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send form data to the backend using fetch
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success response
        console.log('Message sent successfully');
      } else {
        // Handle error response
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '50px',
        textAlign: 'center',
        backgroundColor: theme.tertiaryColor,
        margin: '50px',
        color: theme.textColor,
        borderRadius: '20px',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Company"
          name="company"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.company}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          required
          value={formData.message}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          style={{ backgroundColor: theme.accentColor, color: theme.textColor }}
        >
          Send Message
        </Button>
      </form>
    </Paper>
  );
};

export default ContactPage;

