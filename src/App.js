import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home';
import Admin from './routes/Admin';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/admin" exact component={ Admin } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
