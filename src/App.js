
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
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route  path="/dinner">
         <Dinner/>
       </Route>
       <Route  path="/lunch">
         <Lunch/>
       </Route>
       <Route  path="/breakfast">
        <Breakfast/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
