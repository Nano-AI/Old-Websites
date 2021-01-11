import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import '../../index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    width: '100%',
  },
  navbar: {
    backgroundColor: "#343a40"
  },
  link: {
    color: 'inherit',
    paddingRight: '1.25rem'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{paddingRight: '2.5rem'}}>
            <Link underline="none" href='/' style={{color: 'inherit'}}>Nano-AI</Link>
          </Typography>
          <Link underline="none" className={classes.link} href="/">
            Home
          </Link>
          <Link underline="none" className={classes.link} href="/about/">
            About
          </Link>
          <Link underline="none" className={classes.link} href="/blog/">
            Blog
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
