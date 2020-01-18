import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";


const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet>
        <title>top dayo</title>
      </Helmet>
      <div className="App-headers-">
        <Link to="/about">pre rendering test</Link>
      </div>

    </div>
  );
}

export default App;
