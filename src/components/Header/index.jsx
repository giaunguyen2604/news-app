import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    'backgroundColor': '#09384a'
  },
  logo: {
    backgroundColor: '#09384a',
    width: '300px',
    padding: '10px 0'
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className="logo">
            <div>News App</div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}