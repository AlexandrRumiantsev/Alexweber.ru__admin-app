import React, { Component } from 'react'
const ReactDOM = require('react-dom');

import Projects from '../components/Projects'
import Comments from '../components/Comments'
import Papers from '../components/Papers'
import UserList from './UserList'
import Dashboard from '../templates/panel/Dashboard'

import '../styles/body/menu.scss';

import { RightMenu } from './listItems';
import * as myModule from '../lib/';

import { EditProject } from '../templates/projects/edit.js';


const globalData = {}

function Project() {
  return <div className='page_popupp'><Projects store={globalData.store}/></div>
}
function Paper() {
  return <div className='page_popupp'><Papers store={globalData.store}/></div>
}
function Comment() {
  return <div className='page_popupp'><Comments store={globalData.store}/></div>
}
function Main() {
  return <div id='main-container' ><Dashboard /></div>
}
function check(that){
  console.log(that.state.display);  
}


export class Menu extends Component {
  constructor () {
        super(...arguments);
        const { store } = this.props
        globalData.store = store;
        myModule.liba.setGlobalStore(store);
        myModule.liba.routerState(this);
        this.state = {display: 'main'};
  }
  render() {
      switch(this.state.display){
            case 'edit':
                 return(
                      <div className='container-main'>
                        <RightMenu aut={this.props.authComponent} main={this}/>
                        <EditProject store={globalData.store} id={this.state.item}/>
                      </div>  
                    )    
            break;
            case 'users':
              return <div className='container-main'>
                <RightMenu aut={this.props.authComponent} main={this}/>
                <UserList />
              </div>
            break;
            case 'comment':
              return <div className='container-main'>
                <RightMenu aut={this.props.authComponent} main={this}/>
                <Comment />
              </div>
            break;
            case 'project':
              return <div className='container-main'>
                <RightMenu main={this}/>
                <Project />
              </div>
            break;
            case 'paper':
              return <div className='container-main'>
                <RightMenu main={this}/>
                <Paper />
              </div>
            break;  
            default: 
              return <div className='container-main'>
                <RightMenu main={this}/>
                <Main />
              </div>
      }
    }       
}