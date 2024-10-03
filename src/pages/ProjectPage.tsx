import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Title } from '@mui/icons-material';

interface Theme {
  primaryColor: string;
  accentColor: string;
  tertiaryColor: string;
  textColor: string;
}

interface ProjectProps {
theme: Theme;
}

const ProjectsPage: React.FC<ProjectProps> = ({theme}) => {
  const projects = [
    { title: 'My Personal Website', description: 'This current site, built using React.js, TypeScript, the Material-UI component library, and particle.js as well as fastApi for a very simple backend. This was primarily built to demonstrate my web design capability and creativity. The code is available to view on Github', image: '/path/to/image1.jpg', link:'' },
    { title: 'SupplyLink', description: 'A full-stack web application built using vanilla javascript, html, and css for the front end. The backend is built using FLask and AWS tooling such as lambda, API Gateway, congito for user Authentication, and dynamoDB, SNS,  and Elastic Compute Cloud.', image:"/TransLink.png", link:"https://github.com/kbop2002/Transfreight"},
    { title: 'Linkify Fulfilment Automation', description: 'A dropshipping automation tool built to integrate with the Ebay and AliExpress APIs. The frontend was built using react with typesceipt, and material-ui. The User authentication is handled using the Ebay Oath and AWS COngnito, and the backend is Built using the AWS tooling and Flask.', image: '/path/to/image3.jpg',link:"" },
    { title: 'sample', description:'sample',image:'Sample', link:'Sample'},
    { title: 'sample', description:'sample',image:'Sample', link:'Sample'},
    { title: 'sample', description:'sample',image:'Sample', link:'Sample'},
    { title: 'sample', description:'sample',image:'Sample', link:'Sample'},
    { title: 'sample', description:'sample',image:'Sample', link:'Sample'},
    { title: 'sample', description:'sample',image:'Sample', link:'Sample'},


  ];

  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{padding:'0px', height:'50vh', backgroundColor:theme.tertiaryColor}}>
            <CardMedia
              component="img"
              height="300"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{marginBottom:'10px'}}>
                {project.description}
              </Typography>
              <a href={project.link} style={{height:'10px', width:'25px', backgroundColor: theme.accentColor, padding:"10px", borderRadius:'5px',textDecoration:"none", color: theme.textColor}}>View on GitHub</a>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsPage;
