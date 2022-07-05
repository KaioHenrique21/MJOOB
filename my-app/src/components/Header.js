import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: 'none',

	},
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	container: {
		textAlign: 'center',
	},
	goDown: {
		color: '#d6a121',
		fontSize: '4.5rem',
	},
	appbarWrapper: {
		width: '80%',
		margin: '0 auto',
	},

	Title: {
		color: '#A3A29F',
		fontSize: '4rem',
	},
	appbarTitle: {
		width: '20%',
		margin: '0 auto',
		textAlign: 'center',
		

	},
	icon: {
		color: '#000000',
		fontSize: '2rem',
	},
	colorText: {
		color: '#d6a121',
		fontWeight: 'bold',
	},


}));
function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	  target: window ? window() : undefined,
	});
  
	return (
	  <Slide appear={false} direction="down" in={!trigger}>
		{children}
	  </Slide>
	);
  }
export default function Header() {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(false);
	React.useEffect(() => {
		setChecked(true);
	}, []);
	return (
		<>
			<div className={classes.root}>
			<HideOnScroll>
				<AppBar className={classes.appbar} elevation={0}>
					<Toolbar className={classes.appbarWrapper}>
					<img className={classes.appbarTitle} src="/images/logo.svg" alt="grupoaqui-logo"/>
						<IconButton href="https://www.instagram.com/grupoaqui/">
							<InstagramIcon className={classes.icon}></InstagramIcon>
						</IconButton>
						<IconButton>
							<WhatsAppIcon className={classes.icon} />
						</IconButton>
						<IconButton>
							<FacebookIcon className={classes.icon} />
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
                    
				<Collapse
					in={checked}
					{...(checked ? { timeout: 2000 } : {})}
					collapsedHeight={50}>
					<div className={classes.container}>
						<h1 className={classes.Title}>Gerando diariamente <br /> <span className={classes.colorText}>novas soluções.</span></h1>
						<IconButton>
							<ExpandMoreIcon className={classes.goDown} />
						</IconButton>
					</div>
				</Collapse>
			</div>
		</>
	);
}