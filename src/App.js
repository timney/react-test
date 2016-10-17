import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import store from './store'
import Header from './components/header'
import CakeListPage from './containers/cake-list-page'
import CakeAddPage from './containers/cake-add-page'
import {getCakes} from './actions'

class App extends Component {
  constructor(props){
    super(props)
    store.dispatch(getCakes())
  }
  render() {
    return <div className="app">
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Header}>
              <IndexRedirect to="/cakes" />
							<Route path="cakes" component={CakeListPage}/>
              <Route path="/cakes/add(/:id)" component={CakeAddPage}/>
            </Route>
          </Router>
        </Provider>
      </div>
  }
}

export default App
