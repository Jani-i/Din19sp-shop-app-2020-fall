import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter, BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home';
import Admin from './routes/Admin';
import Item from './routes/Item';
import Footer from './components/Footer';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
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
              <Route path="/products/:productURL" exact component={ withRouter(Item) } />
              <Route path="/login" exact component={ LoginPage } />
              <Route path="/register" exact component={ RegisterPage } />
            </Switch>
          <Footer />
        </Router>    
      </BrowserRouter>

    </div>
  );
}

export default App;

