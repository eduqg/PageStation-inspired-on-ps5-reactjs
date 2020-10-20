import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />
    <p className="citation">
      <span>Inspired interface</span>
      <span>
        Fan made by <a href="https://github.com/eduqg">eduqg</a>
      </span>
    </p>
  </Router>
);

export default App;
