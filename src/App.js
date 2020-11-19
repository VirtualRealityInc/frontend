import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useHistory, useLocation} from "react-router-dom";
import PrivateRoute from './Utility/PrivateRoute'

import Header from './Header'
import Footer from './Footer'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import EditProject from './components/EditProject'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const [fundRaiser, setFundRaiser] = useState(false)
  const [funder, setFunder] = useState(false)
  const { push } = useHistory()
  let location = useLocation()

  useEffect(() => {
    if(window.localStorage.role === "fundraiser"){
      setFundRaiser(true)
      console.log("fundRaiser: ", fundRaiser)
    }else if(window.localStorage.role === "funder"){
      setFunder(true)
      console.log("funder: ", funder)
    }else{
      setFundRaiser(false)
      setFunder(false)
    }
  }, [location.pathname])

  const logOut = e => {
    e.preventDefault()
    localStorage.removeItem("token")
    localStorage.removeItem("message")
    localStorage.removeItem("role")
    console.log(localStorage)
    push("/login")
  }
  console.log()
  return (
    <>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {fundRaiser|| funder ? <></> : <Link to="/register">Register</Link>}
          {fundRaiser || funder ? <></> : <Link to="/login">Login</Link>}
          {fundRaiser ? <Link to='/addproject'>Add Project</Link> : <></>}
          {fundRaiser || funder ? <Link to='/projects'>Projects</Link> : <></>}
          {fundRaiser || funder ? <Link to='/' onClick={logOut} >Log Out</Link> : <></>}
        </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <main>
          <Switch>
            <PrivateRoute path="/editproject/:id" component={EditProject}/>

            <PrivateRoute exact path='/addproject' component={AddProject}/>

            <PrivateRoute exact path='/projects' component={Projects}/>

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
    </>
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
