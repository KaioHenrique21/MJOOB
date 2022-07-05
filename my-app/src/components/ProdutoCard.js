import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from "@mui/material/styles";

export const useStyles = makeStyles({

	root: {
		maxWidth: 800,
		background: '#FFFFFF',
		margin: '10px',
		paddingLeft: 0,
		border: "3px solid #d6a121",
	  },
	  title: {
		fontFamily: 'Averta',
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#FFFFFF',
		backgroundColor: '#d6a121',
		paddingLeft: 10,
	  },
	  title2: {
		fontFamily: 'Averta',
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#FFFFFF',
		backgroundColor: '#d6a121',
		paddingLeft: 10,
	  },
	  title3: {
		fontFamily: 'Averta',
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#FFFFFF',
		backgroundColor: '#d6a121',
		paddingLeft: 10,
	  },
	  desc: {
		fontFamily: 'Averta',
		fontSize: '1rem',
		color: '#000000',
		paddingLeft: 10,
	  },
	  media:{
		width: 420,
		height: 320,
	  },
	  
});

export default function ProdutoCard({ place }) {
	const classes = useStyles();
	const CardContentNoPadding = styled(CardContent)(`  padding: 0;  &:last-child {    padding-bottom: 0;  }`);
	
	return (
		<>
		<Card className={classes.root}>
			<CardMedia image={place.imageURL} className={classes.media} />
			<CardContentNoPadding>
				<Typography className={classes.title2}>
					{place.card1}
				</Typography>
				<Typography className={classes.title}>
					{place.card2}
				</Typography>
				<Typography className={classes.title3}>
					{place.card3}
				</Typography>
				<Typography className={classes.desc}>
					{place.descreption}
				</Typography>
			</CardContentNoPadding>
		</Card></>
	);
}
