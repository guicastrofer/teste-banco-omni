import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListDepartamentosComponent from './components/ListDepartamentosComponent';
import HeaderComponent from './components/HeaderComponent';
import CriarDepartamentoComponent from './components/CriarDepartamentoComponent';
import AtualizarDepartamentoComponent from './components/AtualizarDepartamentoComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListDepartamentosComponent}></Route>
                          <Route path = "/departamentos" component = {ListDepartamentosComponent}></Route>
                          <Route path = "/add-departamento/:id" component = {CriarDepartamentoComponent}></Route>
                           {/* <Route path = "/update-departamento/:id" component = {AtualizarDepartamentoComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
