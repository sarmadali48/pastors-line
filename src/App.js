import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import Router from './Router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  axios.defaults.headers.common = {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4`,
  };
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} /> 
      </Switch>
      </Router>
  );
}

export default App;
