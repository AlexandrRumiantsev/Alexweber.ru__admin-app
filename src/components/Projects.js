import React, {
  Component
} from 'react'
import PropTypes from 'prop-types';

import '../styles/app.scss';
import '../styles/body/projects/list.scss';
import '../styles/body/projects/item.scss';

var ReactDOM = require('react-dom');

import * as myModule from '../lib/';
import { ItemProjectTemplate  } from '../templates/projects/item.js';
import { ListProjectTemplate  } from '../templates/projects/list.js';
import { Loader  } from '../templates/main/loader.js';


function editProject(data){
  let to = document.getElementsByClassName('edit-container')[0];
  to.classList.toggle('active');
  ReactDOM.render(
    myModule.liba.form.create('EditProject',data) , 
    to
   )
}

export default class Projects extends Component {
  constructor() {
    super(...arguments);
    this.setState({
      data: [],
      render: false
    })
    const {
      store
    } = this.props
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

  }
  componentDidMount() {
    const {
      store
    } = this.props

    store.dispatch({
      type: 'getProjectsAll',
      data: {
        'store':store,
        'projectComponent' : this
      }
    })
  }
  render() {
    const {
      store
    } = this.props

    const itemDel = function(){
      let del = confirm("Удалить?");
        if(del){
          console.log('Удалить');
        }
    }
                
    const goToMain = function(){
      store.dispatch({type: 'index',val: 'index'})
    }
    if(this.state.render == true){
      return <ListProjectTemplate 
                data={this.state.data} 
                goToMain={goToMain}
                item={ItemProjectTemplate}
                editProject={editProject}
                itemDel={itemDel}
            />
    }else{
      return <Loader />
    }
    
  }
}