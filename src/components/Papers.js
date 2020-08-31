import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/app.scss';
import { getPapers } from '../actions/PapersActions.js';

import { ListPaperTemplate } from '../templates/papers/list.js';

import { connect } from 'react-redux';
import '../styles/body/papers/list.scss';
import '../styles/body/papers/item.scss';
import * as myModule from '../lib/';

import {
  Link
} from "react-router-dom";
import { Loader  } from '../templates/main/loader.js';


 class Papers extends Component {
  constructor () {
        super(...arguments);
        const { store } = this.props
        this.state = store.getState();
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
  }
  componentDidMount(){
    const { store } = this.props
    getPapers(this , store)
  }
  render() {
  	const { store } = this.props

    if(this.state.papers.data){
      return <ListPaperTemplate 
                myModule={myModule} 
                data={this.state.papers.data}
                store={store}
              />
    }else{
      return <Loader />
    }
    
  }
}
const mapStateToProps = state => {
  return {
    papers: state.papers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData:  (state) => {
      dispatch(getTest(state))
    }
  }
}
export default connect( mapStateToProps , mapDispatchToProps)(Papers)