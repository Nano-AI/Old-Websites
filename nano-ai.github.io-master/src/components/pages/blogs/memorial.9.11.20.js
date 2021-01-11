import React from 'react';
import '../../../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../../reusable/Banner';
import NavBar from '../../reusable/NavBar';

const useStyles = makeStyles((theme) => ({
	content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '0px',
  },
}));

function Memorial_9_11_20() {
  const classes = useStyles();
  return (
    <div>
			<NavBar />
			<Banner title="Testing Website" text="Testing Website" />
			<div className={classes.content}>
        
			</div>
    </div>
  );
}

export default Memorial_9_11_20;
