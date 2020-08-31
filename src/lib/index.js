import form from './form';
import file from './file';
import Material from './material';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';


const globalData = {
	prevPage: '' ,
	page: '' ,
	store: ''
}
export const liba = {
 	'forms': function(){
 		return(
		   <TextField id="standard-basic"
	            disabled 
	            defaultValue='ssss' 
	            label="ID" 
	      />
		)
 	},
	'setGlobalStore' : function(store) {
		globalData.store = store;
	},
	'getGlobalStore' : function() {
		return globalData.store;
	},
	'session': function(page){
		sessionStorage.setItem('page', page);
	},
	'routerState' : function(component) {
        
		const mutationObserver = new MutationObserver(function(mutations) {
			let text = window.location.pathname;
			
			let resSplit = text.split('-');
			let result = resSplit[0].slice(1);
			if(resSplit){
				if(result=='edit'){
					component.setState({
				      display: result,
				      type: resSplit[2],
				      item: resSplit[3]
				    })
				}else{
					component.setState({
				      display: text.substring(1).toLowerCase()
				    })
				}
			}
			
		});
		mutationObserver.observe(document, {
		  attributes: true,
		  characterData: true,
		  childList: true,
		  subtree: true,
		  attributeOldValue: true,
		  characterDataOldValue: true
		});

		window.onload = function() {
        	console.log('RELOAD');
        }
  		
	},
	'form': {
		'create': function(type , data , store){
			return new form(type , data , store);
		}
	},
	'file' : {
		'create': function(){
			return new file;
		}
	},
	'materialUI' : {

		'paperAddPopap': function(store){
			new Material('paperAddPopap' , store)
		}
	}
}