import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home';
import Admin from './routes/Admin';
import Item from './routes/Item';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/admin" exact component={ Admin } />
          <Route path="/products/:productURL" component={ Item } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
