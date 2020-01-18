import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import s from './App.module.scss';
import Button from "./button";


const App: React.FC = () => {
  return (
    <div className="app">
      <Helmet>
        <title>藤山 雅敏</title>
      </Helmet>
      <div className={s.app}>
        <div className={s.p}>engineer</div>
        <div>
          <Button />
        </div>
        <Link to="/about">pre rendering test</Link>
      </div>

    </div>
  );
}

export default App;
