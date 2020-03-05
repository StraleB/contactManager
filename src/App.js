import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import {Provider} from './context';
import AddContact from'./components/contacts/AddContact' ;
import EditContact from './components/contacts/EditContact';
import NtFound from './components/pages/NotFound';
import Test from'./components/test/Test'
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    const name = 'Larry';
    const showHello = true;
    return (
      <Provider>
        <Router>
      <div className="App">
       <Header branding ="Contact Manager" />
       <div className="container">
       <Switch>
         <Route exact path ="/" component = {Contacts}></Route>
         <Route exact path ="/contact/add" component = {AddContact}></Route>
         <Route exact path ="/contact/edit/:id" component = {EditContact}></Route>
         <Route exact path ="/about" component = {About}></Route>
         <Route component={NtFound}></Route>
         <Route exact path ="/test" component = {Test}></Route>
         
       
       </Switch>
         </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
