import { Switch, Route } from "react-router-dom";
import Category from './Pages/Category/Category'
import Home from './Pages/Home/Home'
import Customer from "./Pages/Customer/Customer";
import CustomerList from "./Pages/Customer/CutomerList/CustomerList";
const Routes = () => {
    return ( 
        <Switch>    
            <Route exact path="/" component={Home}/>
            <Route path="/customer" component={CustomerList}/>
            <Route path="/customer/:id" component={CustomerList}/>
            <Route path="/create/:id" component={Customer}/>
           
            {/* <Route to="" componet={Home}/>
            <Route to="" componet={Home}/>
            <Route to="" componet={Home}/>
            <Route to="" componet={Home}/> */}
        </Switch>
     );
}
 
export default Routes;