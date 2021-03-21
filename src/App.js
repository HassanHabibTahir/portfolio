import logo from './logo.svg';
import './App.css';
import Home from './views/route';
import Blogpost from './views/blogpost'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {



  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blogpost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
