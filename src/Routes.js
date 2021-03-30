import { Switch, Route } from "react-router-dom";
import Home from "../src/Screens/Home/Home"
import Customer from "../src/Screens/Customer/Customer";
import CustomerList from "../src/Screens/Customer/CustomerList";
import CategoryList from "./Screens/Category/CategoryList";
import Category from "./Screens/Category/Category";
import SupplierList from "./components/Supplier/SupplierList";
import ManufacturerList from "./components/Manufacturer/ManufacturerList";
import ItemList from "./Screens/Items/ItemList";
import Supplier from "./components/Supplier/Supplier";
import AddItem from "./Screens/Items/AddItem";
const Routes = () => {
    return ( 
        <Switch>    
            <Route exact path="/" component={Home}/>
            <Route path="/customer" component={CustomerList}/>
            {/* <Route path="/customer/:id" component={CustomerList}/> */}
            <Route path="/create/:id" component={Customer}/>
            <Route path="/category" component={CategoryList}/>
            <Route path="/supplier" component={SupplierList}/>
            <Route path="/manu" component={ManufacturerList}/>
            <Route path="/item" component={ItemList}/>
            <Route path="/addcategory/:id" component={Category}/>
            <Route path="/addsupplier/:id" component={Supplier}/>
            <Route path="/additem/:id" component={AddItem}/>
        </Switch>
     );
}
 
export default Routes;