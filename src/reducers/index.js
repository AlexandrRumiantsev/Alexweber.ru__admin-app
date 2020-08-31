import { combineReducers } from 'redux'
import switcher from './switcher';
import main from './main';
import user from './user';
import projects from './projects';
import papers from './papers';
import comments from './comments';


export default combineReducers({
  main,
  user,
  switcher,
  projects,
  papers,
  comments
})