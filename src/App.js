// import {useState} from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const  App = () =>  {
  const API_KEY = '03d80addf67b4f69569eeae03f49fda8';

  return (
    <Router>
      <div  className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container-lg my-3 px-4">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/s/:query'>
              <Home />
            </Route>
            <Route exact path={"/c/:city" }>
              <Main apiKey={API_KEY} city=':city' />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route path="*">
              <h1 className="text-center">This Page Not Found!</h1>
              <p className="h4 text-center lead">Back To <Link to='/' className="fw-normal text-decoration-none">Home Page</Link></p>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
