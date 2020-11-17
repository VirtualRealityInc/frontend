//import React from 'react'
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
import Projects from './components/Projects'
import AddProject from './components/AddProject'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ADD_PROJECT } from "./Actions";


export default function App() {
  return (
    <Router>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path='/addproject'>
              <AddProject/>
            </Route>
            <Route path='/projects'>
              <Projects/>
            </Route>
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
        </main>

        <Footer />
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Header>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//       </Header>
//       <main>
//         {/*<img src="https://assets.weforum.org/global_future_council/image/vCuWaMxdmlbJw5CLpu_f-Svmj1aDEDjD-m-nLgwg8Q8.jpeg" aria-label="virtual reality" />*/}

//         {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/register">
//             <Register />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </main>       
//       <Footer>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//       </Footer>
//     </Router>
//   );
// }

// export default App;