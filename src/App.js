import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  Tile from './tile/tile';
import About from './About/About';
import { Transform } from './Transform/Transform';

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Tile/>
      <Router>
        <div>
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/canvas">About 2d Canvas</Link>
              </li>
              <li>
                <Link to="/transform">Transform in 3D using divs</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/canvas' component={About}></Route>
              <Route exact path='/transform' component={Transform}></Route>
            </Switch>
          </div>
       </Router>

    </div>

    )
  }


}


export default App;

export class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Home...</h1>
        </div>
     )
  }
}


