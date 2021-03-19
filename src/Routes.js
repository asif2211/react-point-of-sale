import { Switch, Route } from "react-router-dom";
import Home from "../src/Screens/Home/Home"
import Customer from "../src/Screens/Customer/Customer";
import CustomerList from "../src/Screens/Customer/CustomerList";
import CategoryList from "./Screens/Category/CategoryList";
import Category from "./Screens/Category/Category";
const Routes = () => {
    return ( 
        <Switch>    
            <Route exact path="/" component={Home}/>
            <Route path="/customer" component={CustomerList}/>
            {/* <Route path="/customer/:id" component={CustomerList}/> */}
            <Route path="/create/:id" component={Customer}/>
            <Route path="/category" component={CategoryList}/>
            <Route path="/addcategory/:id" component={Category}/>
        </Switch>
     );
}
 
export default Routes;