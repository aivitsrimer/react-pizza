import React from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";


function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((response) => response.json()).then(json => {
      setPizzas(json.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
