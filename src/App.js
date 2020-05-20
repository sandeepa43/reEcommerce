import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Main from './components/Main';
import Success from './components/Success';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Main/> */}
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/cart" component={Cart} />
            <Route path="/success" component={Success}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
