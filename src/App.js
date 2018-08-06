import React, { Component } from 'react';
import {HashRouter}from "react-router-dom";
import { Provider} from 'react-redux'
import store from './ducks/store';
//import route from './route';
import './App.css';
 //import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
// import Auth from './components/Auth/Auth';
 //import Post from './components/Post/Post';

import route from './route';

//const store = createStore();
class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <HashRouter>
    
      <div className="App">
        
        <Nav/>
       {route}
       

      </div>
      </HashRouter>
        </Provider>
    );
  }
}

export default App;
