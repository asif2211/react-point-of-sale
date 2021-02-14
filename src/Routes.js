import { Switch, Route } from "react-router-dom";
import Category from './Pages/Category/Category'
import Home from './Pages/Home/Home'
const Routes = () => {
    return ( 
        <Switch>    
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            {/* <Route to="" componet={Home}/>
            <Route to="" componet={Home}/>
            <Route to="" componet={Home}/>
            <Route to="" componet={Home}/> */}
        </Switch>
     );
}
 
export default Routes;