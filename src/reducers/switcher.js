import { createStore } from 'redux'

  const initialState = {
    page: 'index'
  }
  
  const action = {
    
  }
  const mutations = {
     
  }

  export default function switcher(state = initialState , actions) {

    switch(actions.type){
    	case "projects":
    		return Object.assign({}, state, {
             page: actions.type
        	})
    	break;
    	case "papers":
    		return Object.assign({}, state, {
             page: actions.type
        	})
    	break;
    	case "comments":
    		return Object.assign({}, state, {
             page: actions.type
        	})
    	break;
      case "index":
        return Object.assign({}, state, {
             page: actions.type
          })
      break;
    	default:
    		return state;
    	break;

    }
 
  }