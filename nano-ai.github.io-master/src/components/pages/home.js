import React from 'react';
import '../../index.css';
import NavBar from '../reusable/NavBar'
import Banner from '../reusable/Banner';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '0px',
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
	    <Banner title="Nano Website" text="A website about technology." />
      <div className={classes.content}>
      </div>
    </div>
  );
}

export default HomePage;
