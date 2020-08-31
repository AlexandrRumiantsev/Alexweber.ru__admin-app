import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import './styles/app.scss';

const store = configureStore()
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
	<Provider store={store}>
	    <div className='app'> 
	        <App store={store} page={store}/>
	    </div>    
	</Provider>
</BrowserRouter>    
, document.getElementById('app')
);