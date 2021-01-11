import React from 'react';
import '../../index.css';
import NavBar from '../reusable/NavBar';
import Banner from '../reusable/Banner';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
// import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '0px',
    paddingLeft: '100px'
  },
  title: {
    fontWeight: 'normal'
  },
  top: {
    paddingTop: '30px'
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
  codingList: {
    display: 'inline'
  }
}));

function AboutPage() {
  const classes = useStyles();
  return (
    <div>
        <NavBar />
        <Banner title="About" text="The title can explain what's on the page." />
        <div className={`${classes.content} ${classes.top}`}>
          <h1 className={classes.title}>Who am I?</h1>
          <p>I'm just someone who likes to code in my spare time.</p>
          <h1 className={classes.title}>My Projects</h1>

          <h3 className={classes.title}>Python</h3>
          <Project href="https://github.com/Nano-AI/NetworkMonitor" text="DesktopWeather" description="A simple screen saver that I made that's customizable." />
          <Project href="https://github.com/Nano-AI/GitHelper" text="GitHelper" description="A program that commit's and pushes code for you." />
          <Project href="https://github.com/Nano-AI/PyKeylogger" text="PyKeylogger" description="A keylogger I made in Python." />
          <Project href="https://github.com/Nano-AI/Flappy-Bird-Game" text="Flappy-Bird-Game" description="A bad Flappy Bird clone that I made using PyGame." />
          <Project href="https://github.com/Nano-AI/Asteroids" text="Asteroids" description="A game where you have to dodge asteroids." />
          
          <h3 className={classes.title}>Java</h3>
          <Project href="https://github.com/Nano-AI/AnnoyingBot" text="AnnoyingBot" description="Program I made in Java to annoy the user." />
          
          <h3 className={classes.title}>JavaScript</h3>
          <Project href="https://github.com/Nano-AI/Game-of-Life" text="Game-of-Life" description="Game of life made in JavaScript." />

          <h3 className={classes.title}>JavaScript and Python</h3>
          <Project href="https://github.com/Nano-AI/DesktopWeather" text="DesktopWeather" description="A screen saver that gives date, time, inspirational quote, and weather. A better version of PyDesk." />
          
        </div>
    </div>
  );
}

function Project(content) {
  return (
    <p><Link href={content.href}>{content.text}</Link> - {content.description}</p>
  );
}

// function Circle(content) {
//   const classes = useStyles();
//   return (
//     <div className={clsx(classes.shape, classes.shapeCircle)} style={{color: content.color}} />
//   );
// }

export default AboutPage;
