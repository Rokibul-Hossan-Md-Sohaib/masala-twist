
import './App.css';
import Home from './Components/Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dinner from './Components/Products/Dinner/Dinner';
import Lunch from './Components/Pages/Foods/Lunch/Lunch';
import Breakfast from './Components/Products/Breakfast/Breakfast';
import Review from './Components/Review/Review';
import { AddToCard } from '../src/Components/AddToCard/AddToCard';
import { createContext, useState } from 'react';
import Login from './Components/LogIn/Login/Login';
import Shipement from './Components/Shipement/Shipement';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
 
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route  path="/dinner">
         <Dinner/>
       </Route>
       <Route  path="/lunch">
         <Lunch />
       </Route>
       <Route  path="/breakfast">
        <Breakfast/>
       </Route>
       <Route  path="/review">
        <Review/>
       </Route>
       <Route  path="/login">
        <Login/>
       </Route>
       <PrivateRoute  path="/shipment">
        <Shipement/>
       </PrivateRoute>
     </Switch>
    
   </Router>
   </UserContext.Provider>
 
  );
}

export default App;
