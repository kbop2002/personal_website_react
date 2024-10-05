import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

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

  const isSmallScreen = window.innerWidth <= 768;
  const projects = [
    { title: 'My Personal Website', description: 'This current site, built using React.js, TypeScript, the Material-UI component library, and particle.js as well as fastApi for a very simple backend. This was primarily built to demonstrate my web design capability and creativity. The code is available to view on Github', image: '/personalWebsite.png', link:'' },
    { title: 'TransLink', description: 'A full-stack web application built using vanilla javascript, html, and css for the front end. The backend is built using FLask and AWS tooling such as lambda, API Gateway, congito for user Authentication, and dynamoDB, SNS,  and Elastic Compute Cloud.', image:"/TransLink.png", link:"https://github.com/kbop2002/Transfreight"},
    { title: 'Linkify Fulfilment Automation', description: 'A dropshipping automation tool built to integrate with the Ebay and AliExpress APIs. The frontend was built using react with typesceipt, and material-ui. The User authentication is handled using the Ebay Oath and AWS COngnito, and the backend is Built using the AWS tooling and Flask.', image: '/under.jpg',link:"" },
    { title: 'WeatherWise', description:'A full-stack application built using React.js, FastApi, and Zustand for state management. This was one of the first colaborative projects I worked on and get first hand experience working with git. I assisted in both front and back-end developement',image:'/under.jpg', link:'Sample'},
    { title: 'PieCart', description:'A full stack application designed and built collaborativly with a team for a software engineering class. The backend was fully designed and deployed within AWS utilizing tooling such as Lambda, API Gateway, and Cognito for User Authentication and session management.',image:'/under.jpg', link:'Sample'},
    { title: 'Housing Data Statistics Project', description:'A project made ',image:'/under.jpg', link:'Sample'},
    { title: 'Under Construction', description:'Under Construction',image:'/under.jpg', link:'Sample'},
    { title: 'Under Construction', description:'Under Construction',image:'/under.jpg', link:'Sample'},
    { title: 'Under Construction', description:'Under Construction',image:'/under.jpg', link:'Sample'},


  ];

  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{padding:'0px', height: isSmallScreen?'60vh':'50vh', backgroundColor:theme.tertiaryColor, color:theme.textColor,}}>
            <CardMedia
              component="img"
              height="300"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'2.5vh'}}>
                {project.title}
              </Typography>
              <Typography variant="body2" style={{marginBottom:'10px',fontSize:'1.5vh'}}>
                {project.description}
              </Typography>
              <a href={project.link} style={{height:'10px', width:'25px', backgroundColor: theme.accentColor, padding:"10px", borderRadius:'5px',textDecoration:"none", color: theme.textColor, boxShadow:'1px 1px 3px black'}}>View on GitHub</a>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsPage;
