import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from "@mui/material/styles";



export const useStyles = makeStyles({
	root: {
	  maxWidth: 800,
	  background: '#FFFFFF',
	  margin: '10px',
	  paddingLeft: 0,
	  border: "3px solid #d6a121",
	  boxShadow: '0 0 0 2px (--green-500)',
	 
	},
	title: {
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#FFFFFF',
		backgroundColor: '#d6a121',
		paddingLeft: 10,
	  },

	  title2: {
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#FFFFFF',
		backgroundColor: '#d6a121',
		paddingLeft: 10,
	  },
	  title3: {
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#FFFFFF',
		backgroundColor: '#d6a121',
		paddingLeft: 10,
	  },
	 
	  desc: {
		fontSize: '1.0rem',
		color: '#424242',
		paddingTop: 20,
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,

	  },
	  
});

export default function ImageCard({ place }) {
	const classes = useStyles();	 
	const CardContentNoPadding = styled(CardContent)(`  padding: 0;  &:last-child {    padding-bottom: 0;  }`);
	
	return (

		<><Card className={classes.root}>
			<CardContentNoPadding>
				<Typography className={classes.title}>
					{place.title}
				</Typography>
				<Typography className={classes.title2}>
					{place.title2}
				</Typography>
				<Typography className={classes.title3}>
					{place.title3}
				</Typography>
				<Typography className={classes.desc}>
					{place.descreption}
				</Typography>
			</CardContentNoPadding>
		</Card></>

	);
}