import logo from './logo.svg';
import './App.css';
import Home from './views/route';
import Blogpost from './views/blogpost'
import Project from './views/project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePost from './views/SinglePost';
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
        <Route exact path="/post/:slug">
          <SinglePost />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
