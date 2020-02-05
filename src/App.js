import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HompageComponent'
const HatsPage = () => (
<div>
  <h1 style={{fontStyle: 'bold', justifyContent:'center', display:'flex'}}>HATS PAGE</h1>
</div>
)
function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
