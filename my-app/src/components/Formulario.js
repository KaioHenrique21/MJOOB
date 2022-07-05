import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

  root: {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3a29f',
    borderRadius: 10,
    margin: 20,
    width: '100%'
  },

  wrapper: {
    gap: '192px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
    },

  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 245,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 192,
  }

});

export default function Formulario() {
  const classes = useStyles();

  return (
  <>
    <form className={classes.root}>
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.field}>
          <label for="nome"> Nome </label>
          <input
            type="text"
            id="nomeid"
            placeholder="Tiago Vale"
            required="required"
            name="nome"
          />
        </div>

        <div className={classes.field}>
          <label for="fone"> Fone </label>
          <input
            type="tel"
            id="foneid"
            placeholder="(xx)xx-xx-xx-xx"
            name="fone"
          />
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.field}>
          <label for="email"> Email </label>
          <input
            type="email"
            id="emailid"
            placeholder="fulano@mail.com"
            name="email"
          />
        </div>

        <div className={classes.field}>
          <label for="mensagem"> Mensagem </label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Deixe sua opnião"
          ></textarea>
        </div>
      </div>
    </div>
      <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
    </form>
  </>
);

}


