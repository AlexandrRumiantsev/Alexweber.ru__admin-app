import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


/**
 * Template loader
 * @returns {html} Returns template loader with style.
 */

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: '10%'
  },
  rootDop: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    left: '0'
  },
});

export function Loader(dop){
  const classes = useStyles();
  if(dop){
    return <div className={classes.rootDop}>
      <CircularProgress size={100} disableShrink />
    </div>;
  }else{
    return <div className={classes.root}>
      <CircularProgress size={100} disableShrink />
    </div>; 
  }
    
}