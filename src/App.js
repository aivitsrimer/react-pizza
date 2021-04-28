import React from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, []);

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </div>
  </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// }

// const mapDispatchToProps = {
//   setPizzas,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
