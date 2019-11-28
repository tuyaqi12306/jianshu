import React, { Component } from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Write from './pages/write'
import Login from './pages/login'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/write' component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
