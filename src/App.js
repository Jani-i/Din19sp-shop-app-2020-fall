import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter, BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home';
import Admin from './routes/Admin';
import Item from './routes/Item';
import Footer from './components/Footer';
import Products from './routes/Products';
import styles from './App.module.css'

function App(props) {

  return (
    <div>
      <BrowserRouter>
        <Router>
          <Header /> 
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/admin" exact component={ Admin } />
              <Route path="/products/:productURL" exact component={ Item } />
              <Route path="/products" exact component={ Products } />
            </Switch>
          <Footer />
        </Router>    
      </BrowserRouter>

    </div>
  );
}

export default App;

