import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ProjectsPage from './pages/ProjectPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AppBarHeader from './components/AppBarHeader.tsx';
import Footer from './components/Footer.tsx';
import chooseTheme from './colors.config.js';
import Resume from './pages/Resume.tsx';
const App: React.FC = () => {
  const [theme, setTheme] = useState(chooseTheme(0));
  const [open, setOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {['Theme 1', 'Theme 2', 'Theme 3', 'Theme 4',"Theme 5"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setTheme(chooseTheme(index + 1))}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Router>
      {/* Pass the toggle function as a prop to the AppBarHeader */}
      <AppBarHeader theme={theme} onMenuClick={() => toggleDrawer(true)} />
      
      {/* Drawer component */}
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>


      {/* Main Content Area */}
      <Container
        maxWidth="lg"
        style={{
          minHeight: '95vh',
          maxHeight:'1000vh',
          paddingTop: '10vh',

          paddingBottom:'30px',
          backgroundColor: theme.primaryColor,
          maxWidth: '100vw',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1, // Make sure the content is above the 3D scene
        }}
      >
        {//<ParticleBackground/>
        }
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route path="/about" element={<AboutPage theme={theme}/>} />
          <Route path="/projects" element={<ProjectsPage theme={theme} />} />
          <Route path="/contact" element={<ContactPage theme ={theme}/>} />
          <Route path='/resume' element ={<Resume/>}/>
        </Routes>
      </Container>

      <Footer theme={theme}/>
    </Router>
  );
};

export default App;
