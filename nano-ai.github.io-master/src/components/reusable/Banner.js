import React from 'react';
import '../../index.css';
import CodingScreen from '../images/CodingScreen.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '0px',
  },
  jumbotron: {
		backgroundSize: 'cover',
		paddingRight: '0',
		paddingLeft: '0',
		borderRadius: '0',
		padding: '10px 50px',
		marginBottom: '0px',
		// padding: '4rem 2rem',
		// marginBottom: '2rem',
		width: '100%',
		display: 'block'
  },
  name: {
		fontSize: '60px',
		flexBasis: '0',
		flexGrow: '1',
		minWidth: '0',
		maxWidth: '100%',
		position: 'relative',
		width: '100%',
		// marginBottom: '0.5rem',
		marginBottom: '50px',
		fontWeight: '500',
		lineHeight: '1.2',
		marginTop: '0',
		boxSizing: 'border-box',
		display: 'block',
		// marginBlockStart: '0.67rem',
		// marginBlockEnd: "0.67em",
		marginBlockStart: '85px',
		marginBlockEnd: '85px',
		marginInlineStart: '0px',
		marginInlineEnd: '0px',
		color: '#fff',
		textAlign: 'left',
		// paddingLeft: '5rem'
		paddingLeft: '100px'
	},
	about: {
		fontSize: '15px',
		fontWeight: 'normal'
  },
  title: {
    fontWeight: 'normal'
  }
}));

function Banner(content) {
	const classes = useStyles();
	var background = (content.background === undefined) ? CodingScreen : content.background;
  return (
		<div>
			<div className={classes.jumbotron} style={{backgroundImage: `url(${background})`,}}>
				<h1 className={classes.name}>{content.title}<p className={classes.about}>{content.text}</p></h1>
			</div>
		</div>
  );
}

export default Banner;
