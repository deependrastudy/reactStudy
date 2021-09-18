 import React from 'react';
 import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
        <Route path="/" component={ProductListing} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route>404 Not Found</Route>
        </Switch>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
