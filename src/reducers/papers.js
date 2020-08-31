import { createStore } from 'redux'
import { getPapers } from '../actions/PapersActions.js'
import { updatePaper } from '../actions/PapersActions.js'
import { delPaper } from '../actions/PapersActions.js'
import { savePaper } from '../actions/PapersActions.js'


  const initialState = {
    data: [],
    status: false
  }
  

  export default function papers(state = initialState , actions) {

    switch(actions.type){
      case "getPapersAll":
        getPapers(state , actions.val);
        return state;
      break;
      case "setPapers":
        return Object.assign({}, state, {
            data: actions.val,
            status: true
        })
      break;
      case "uppPaper":
        updatePaper(
          actions.val.store , 
          actions.val.data,
          actions.val.callback
        );
        return state;
      break;
      case "delPaper":
        delPaper(actions.val.id);
        return state;
      break;
      case "savePaper":
        savePaper(actions);
        return state;
      break;
      default:
        return state;
      break;

    }
 
  }