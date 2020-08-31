import React, { useState, useEffect } from 'react';
import { Loader  } from '../main/loader.js';
import * as myModule from '../../lib/';
import '../../styles/body/projects/edit.scss';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const globalData = {}

function filterById(item) {
	if(globalData.id == item._id){
		return item;
	}
};
function getItem(id , arr) {
	JSON.parse(arr).forEach( function(el , i){
		if(el._id == id){
			return el;
		}
	});
};

function Template(props) {
	const [open, setOpen] = React.useState(false);

	  const handleClickOpen = function(e){
	  	console.log(e);
	    setOpen(true);
	  };

	  const handleClose = () => {
	    setOpen(false);
	  };

	let imgFull = "http://alexweber.ru/img/" + props.data.imageFull;
	let img = "http://alexweber.ru/img/" + props.data.image;
	return(
		<div className='edit-item'>
		     
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>	
			<div className='edit-cont'>
			    <div className='edit-item__id'>
			    	<input
			    		readOnly 
			    		className='edit-item-input' 
			    		defaultValue={props.data._id} 
			        />
			    </div>
			    <div className='edit-item__discription'>
			    	<textarea  
			    		className='edit-item-input' 
			    		>
			    		{props.data.discription} 
			        </textarea>
			    </div>
			    
			    <div className='edit-item__link'>
			    	<input  
			    		className='edit-item-input' 
			    		defaultValue={props.data.link}
			        />
			    </div>
			    <div className='edit-item__name'>
			    	<input  
			    		className='edit-item-input' 
			    		defaultValue={props.data.name}
			        />
			    </div>
			</div>
			<div className='edit_cont-img'>
			    <div className='edit-item__imageFull'>
			     <Button variant="outlined" color="primary" onClick={(e) => handleClickOpen(e)}>
			         Полное изоображение
			      </Button>
			   	</div>
			    <div className='edit-item__image'>
			      <Button variant="outlined" color="primary" onClick={(e) => handleClickOpen(e)}>
			         Превью
			      </Button>
			    </div>
			</div>
		</div>
	)
};


export function EditProject(props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		 
		let resSplit = window.location.pathname.split('-');
		globalData.id = resSplit[2];

		if(localStorage['data_project']){}
		else localStorage['data_project'] = JSON.stringify(
				props.store.getState().projects.data
			)
		globalData.result = JSON.parse(
				localStorage['data_project']
			).find(filterById);
		   
	})   

    if(globalData.result){
       return(
		<div className='page_popupp'>
			<Template data={globalData.result} />
		</div>
	   )
    }else{
		return(
			<Loader />
		)
    }
	
}