import React from 'react';
import { Typography } from '@mui/material';
import FadeInImage from '../components/FadedInImage/FadedInImage.tsx';

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



  
<div style={{
  width: '25vw',
  display:'flex',
  flexDirection:'column',
  marginLeft:'0px'
  }}>
    <FadeInImage src={'/flask.png'} alt={''} height={'40px'} width={'100'} top={'10vh'} left={''}/>
    <FadeInImage src={'/react.png'} alt={''} height={'60px'} width={'60px'} top={'20vh'} left={''}/>
    <FadeInImage src={'/MUI.svg'} alt={''} height={'60px'} width={'60px'} top={'30vh'} left={''}/>
    <FadeInImage src={'/AWS.png'} alt={''} height={'110px'} width={'110px'} top={'40vh'} left={''}/>
    <FadeInImage src={'/cognito.svg'} alt={''} height={'60px'} width={'60px'} top={'50vh'} left={''}/>
    <FadeInImage src={'/dynamodb.svg'} alt={''} height={'80px'} width={'80px'} top={'60vh'} left={''}/>
    <FadeInImage src={'/gateway.svg'} alt={''} height={'60px'} width={'60px'} top={'70vh'} left={''}/>

  </div>
  

    <div
        style={{
          padding: '50px',
          backgroundColor: theme.primaryColor,
          color:theme.textColor,
          boxShadow:'none',
          border:'none',
          minHeight:'90vh',
          width: '50vw',
          textAlign: 'center',

        }}
      >
        <Typography variant="h3" gutterBottom style={{fontFamily:'Garamond', fontSize:'4vh'}}>
          About Me
        </Typography>
        <Typography variant="h5" style={{textAlign:'left', textIndent:'50px', lineHeight:'2', fontFamily:'Courier New',fontSize:'2vh'}}>
          My name is Kenechukwu (KC) Achukwu, and I am a 4th-year CS major and SWE intern passionate about software design and development. 
          I've built this site to showcase a few of my favorite projects but have many more you can view on my Github linked in
          the navigation bar. I have experience in both front and backend developement as well as database design and developement. 
          I am currently pursuing my interest in machine learning and am in the midst of developing several models as components of new 
          features for some of my projects.{<br/>}{<br/>}
        </Typography>
        <Typography variant="h5" style={{textAlign:'left', textIndent:'50px', lineHeight:'2', fontFamily:'Courier New',fontSize:'2vh'}}>
          I am comfortable working with several tech stacks but I primarily work with React.js using TypeScript, and the Material-UI library for frontend
          work. For backend work I primarily utliize the Flask or FastAPI frameworks within Python. I have extensive experience working with several of the AWS tooling such as AWS Lambda,
          API Gateway, DynamoDB, Elastic Compute Cloud(EC2), and more. I am proficient in building and querying databases with SQL, and also have 
          experience utilizing noSQL databases such as MongoDB. I have also worked with Java rather extensively as most of my course work is in java;and I have a working knowledge of C# as well
          as R for statistical programming but have used these much less thuroughly than any other languages. <br/><br/>
        </Typography>
        <Typography variant="h5" style={{textAlign:'left', textIndent:'50px', lineHeight:'2', fontFamily:'Courier New',fontSize:'2vh'}}>
          My greatest strength is my ability to learn and adapt to changes. I learn quickly and believe nothing can prepare you for a situation other than experience and an open mind.
          I am very adaptable both technically and collaborativly and am extremely comfortable working in team settings or working solo. I always try to stay aware of the limitations of my 
          own knowledge and will walk into any circumstance ready to absorb as much as possible from anyone around me. I am always open to coverse, and if you would like to know more about me,
          or have any feedback for me, please feel free to reach my either through my LinkedIn, or by sending a message through the contact form!{<br/>}{<br/>} Have a wonderful day,{<br/>}  -Kenechukwu Achukwu
        </Typography>
    </div>
    <div style={{
  width:'25vw',
  display:'flex',
  flexDirection:'column',
  }}>
    <FadeInImage src={'/IMG_0549.jpg'} alt={'Selfie'} height={'300px'} width={'300px'} top={'5vh'} left={''}/>
    <FadeInImage src={'/EC2.png'} alt={''} height={'80px'} width={'80px'} top={'20vh'} left={''}/>
    <FadeInImage src={'/Lambda.png'} alt={''} height={'60px'} width={'100px'} top={'30vh'} left={''}/>
    <FadeInImage src={'/java.svg'} alt={''} height={'110px'} width={'110px'} top={'40vh'} left={''}/>
    <FadeInImage src={'/python.svg'} alt={''} height={'110px'} width={'110px'} top={'50vh'} left={''}/>
    <FadeInImage src={'/sql.png'} alt={''} height={'60px'} width={'55px'} top={'60vh'} left={''}/>

  </div>
    </>
  );
};

export default AboutPage;
