import ImageCard from "./ImageCard.js";
import ProdutoCard from './ProdutoCard.js';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import places from '../static/places';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pc: {
    minHeight: '50vh',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#a3a29f',
    borderRadius: 10,
    padding: 0,

  },
  card: {
    minHeight: '50vh',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  np:{
    minHeight: '10vh',
    paddingRight: 0,
		fontWeight: 'bold',
		fontSize: '1rem',
		color: '#fff',
		paddingLeft: 20,
    flexGrow: '1',
		textAlign: 'center',
    display: 'flex',
    backgroundColor: '#a3a29f',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 960,
	  },

    fc:{
      fontSize: '1rem',
      color: '#fff',
      padding: '0 20px',
      backgroundColor: '#a3a29f',
      borderRadius: 10,
      margin: 20,
      width: 'fit-content'
      },

}));
export default function App() {
  const classes = useStyles();
  return (
 <><div className={classes.root}>
      <ImageCard place={places[0]} />
      <ImageCard place={places[1]} />
      <ImageCard place={places[2]} />
    </div><div className={classes.np}><h1>NOSSOS PRODUTOS</h1></div><div className={classes.card}>
        <ProdutoCard place={places[3]}/>
        <ProdutoCard place={places[4]}/>
        <ProdutoCard place={places[5]}/>
      </div><div className={classes.fc}><h1>FALE CONOSCO</h1></div>
    </>
  );
}