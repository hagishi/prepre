import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/" component={App}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();

if ((module as any).hot) {
  (module as any).hot.accept();
}
