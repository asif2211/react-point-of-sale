import { Switch, Route } from "react-router-dom";
import Home from "../src/Screens/Home/Home"
import Customer from "../src/Screens/Customer/Customer";
import CustomerList from "../src/Screens/Customer/CustomerList";
const Routes = () => {
    return ( 
        <Switch>    
            <Route exact path="/" component={Home}/>
            <Route path="/customer" component={CustomerList}/>
            {/* <Route path="/customer/:id" component={CustomerList}/> */}
            <Route path="/create/:id" component={Customer}/>
            
           
            {/* <Route to="" componet={Home}/>
            <Route to="" componet={Home}/>
            <Route to="" componet={Home}/>
            <Route to="" componet={Home}/> */}
        </Switch>
     );
}
 
export default Routes;