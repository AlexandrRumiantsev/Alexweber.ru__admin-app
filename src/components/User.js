import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as myModule from '../lib/';
 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const globalData = {}
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	  root: {
	    marginTop: '30px',
	    color: 'white'
	  }
  })
)


export default class User extends Component {
constructor () {
    super(...arguments); 
    globalData.authComponent = this.props.data.main.props.authComponent;
    globalData.props = this.props;
}
render() {
    return <div>
      <DropMenu/>
    </div>
  }
}



function DropMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExit = () => {
    globalData.authComponent.setState({clear : true});
    sessionStorage.clear();
  };

  return (
    <div>
      <span onClick={handleClick}>
        { sessionStorage.getItem('log') }
      </span>
      <Menu
         onClose={handleClose}
        className={classes.root}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleExit}>Logout</MenuItem>
      </Menu>
    </div>
  );
}