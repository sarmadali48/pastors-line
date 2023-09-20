import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import Router from './Router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} /> 
      </Switch>
      </Router>
  );
}

export default App;
