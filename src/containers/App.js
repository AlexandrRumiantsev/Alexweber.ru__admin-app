import React, {
  Component
} from 'react'
import {
  bindActionCreators
} from 'redux'
import {
  connect
} from 'react-redux'
import User from '../components/User'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ReactDOM = require('react-dom');

import {
  Authorization
} from './Authorization.js'

import '../styles/body/menu.scss';


class App extends Component {
  constructor() {
    super(...arguments);
    const {
      store
    } = this.props
    this.state = store.getState();
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    this.state = {
      display: false
    };

  }
  componentDidMount() {

  }
  render() {
    return <Authorization store = {
      this.props.store
    }
    />
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    main: state.main
  }
}

function mapDispatchToProps(dispatch) {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)