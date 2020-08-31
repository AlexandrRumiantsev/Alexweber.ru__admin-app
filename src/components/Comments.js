import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { connect } from 'react-redux';
import { delComment , getComments } from '../actions/CommentsActions.js';
import '../styles/body/comments/list.scss';
import '../styles/body/comments/item.scss';

import { ItemCommentTemplate  } from '../templates/comments/item.js';
import { ListCommentTemplate  } from '../templates/comments/list.js';
import { Loader  } from '../templates/main/loader.js';



const globalData = {}


function ItemComment(props){
    const del = function(){
        let sign = confirm("Удалить?");
        if(sign)
           delComment(props.data._id , props.components , props.store);
    }
    return ItemCommentTemplate( props , del);                
}

class Comments extends Component {
	constructor () {
        super(...arguments);
        const { store } = this.props;
        this.state = store.getState();
        globalData.store = store;
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
  }
  componentDidMount(){
    const { store } = this.props;
    getComments(this , store)
  }
  render() {
  	const { store } = this.props
    const goToMain  = function(){
      globalData.store.dispatch({type: 'index',val: 'index'})
    }
    const commentState = store.getState().comments;
    if(this.state.status == true){
      return ListCommentTemplate(goToMain , commentState , store , ItemComment) 
    }else{
      return <Loader />
    }
    
  }
}


const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getComments(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Comments)