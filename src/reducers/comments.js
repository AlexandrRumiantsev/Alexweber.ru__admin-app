import { createStore } from 'redux'
import { getComments , delComment} from '../actions/CommentsActions.js'

  const initialState = {
    data: [],
    status: false
  }
  

  export default function comments(state = initialState , actions) {

    switch(actions.type){
      case 'getComment':
          console.log('GET_COMMENTS_ALL');
          return state;
      break;
      case 'setComment':
          console.log('SET_COMMENTS');
          return Object.assign({}, state, {
             data: actions.val,
             status: true
          })
      break;    
      case 'refrashComment':
          console.log('refrashComment');
          let el = document.getElementById(actions['data'].id);
          el.parentNode.removeChild(el);
        return state;
      break;
      default:
        return state;
      break;
    }
 
  }