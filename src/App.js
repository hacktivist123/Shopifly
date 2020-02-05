import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HompageComponent'
import ShopPage from './pages/shop/ShopPage'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
