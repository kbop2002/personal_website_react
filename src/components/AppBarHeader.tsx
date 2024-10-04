import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ColorLensIcon from '@mui/icons-material/ColorLens';

interface Theme {
  primaryColor: string;
  accentColor: string;
  tertiaryColor: string;
  textColor: string;
}

interface AppBarHeaderProps {
  theme: Theme;
  onMenuClick: () => void;  // Updated type to function
}

const AppBarHeader: React.FC<AppBarHeaderProps> = ({ theme, onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" style={{ backgroundColor: theme.accentColor, color:theme.textColor }}>
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
            <IconButton color="inherit" onClick={onMenuClick}>
                <ColorLensIcon />
            </IconButton>
        </Typography>


        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/about')}>
          About
        </Button>
        <Button color="inherit" onClick={() => navigate('/projects')}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => navigate('/resume')}>
          Resume
        </Button>
        <Button color="inherit" onClick={() => navigate('/contact')}>
          Contact
        </Button>
        

        <IconButton
          color="inherit"
          href="https://github.com/kbop2002"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://linkedin.com/in/kachukwu"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
