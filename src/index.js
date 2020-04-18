import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Layout from './components/layout'
import Countries from './components/countriesCaller'
import GuessCountrie from './components/guessCountrie'
import * as serviceWorker from './serviceWorker';


const rendering = (
  <Router>
    <Layout>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/guessCountrie">guessCuntrie</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/countries" component={Countries} />
        <Route path="/guessCountrie" component={GuessCountrie} />
      </div>
    </Layout>
  </Router>
)
ReactDOM.render(rendering, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
