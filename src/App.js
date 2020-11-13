import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    
    <Router>
      <Header />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <main><img src="https://assets.weforum.org/global_future_council/image/vCuWaMxdmlbJw5CLpu_f-Svmj1aDEDjD-m-nLgwg8Q8.jpeg" role="img" aria-label="virtual reality" />
</main>       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  
  );
}

export default App;