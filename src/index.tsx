import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import  from "react-";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Helmet from "react-helmet";

const About = () => {
  return <div>
    <Helmet>
      <title>aaaaaa</title>
    </Helmet>
    <Link to="/">back</Link>
    <div>eeeeeee</div>
  </div>
}


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/" component={App}/>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
