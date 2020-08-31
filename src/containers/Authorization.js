import React, {
  Component
} from 'react'
import {
  Menu
} from './Menu.js'
import '../styles/header/login.scss';
import {LoginForm} from '../templates/forms/Login.js'

const globalData = {}

export class Authorization extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      autoriz: [],
      checkbox: 'false'
    };
    
    globalData.component = this;
    globalData.store = props.store;
  }
  login() {

    let data = globalData.store.dispatch({
      type: 'LoginUser',
      val: {
        'log': document.getElementById('log').value,
        'pass': document.getElementById('pass').value,
        'callback': function (log , pass) {
           sessionStorage.setItem('log', log);
           sessionStorage.setItem('pass', pass);
           globalData.component.uppComponent();
        }
      },
      store: globalData.store
    })

  }
  uppComponent() {
    globalData.component.setState({refrash: true});
  }
  render() {
    if (sessionStorage.getItem('log') && sessionStorage.getItem('pass'))
      return <Menu log={ sessionStorage.getItem('log') } 
                   store = {this.props.store}
                   authComponent={this}
                  />
      else
        return <LoginForm login={this.login} />
  }
}
