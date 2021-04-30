import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import CustomerList from './Screens/Customer/CustomerList'
import Customer from './Screens/Customer/Customer'
import Parents from './Screens/Parents/Parents'
import ParentsList from './Screens/Parents/ParentsList'
import CategoryList from './Screens/Category/CategoryList';
import Category from './Screens/Category/Category';
import ProductList from './Screens/Product/ProductList';
import Product from './Screens/Product/Product';
import PrintBarCode from './Screens/Barcode/PrintBarCode';
import AdjustmentList from './Screens/Ajdustment/AdjustmentList';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/product' exact component={ProductList} />
        <Route path="/category" component={CategoryList}/>
        <Route path="/addcategory/:id" component={Category}/>
        <Route path="/print_barcode" component={PrintBarCode}/>
        <Route path="/adjustment" exact component={AdjustmentList}/>
        <Route path='/parents/:id' exact component={Parents} />
        <Route path='/parentlist' exact component={ParentsList} />
        <Route path="/create/:id" component={Customer}/>
        <Route path="/addproduct/:id" component={Product}/>
      </Switch>
    </Router>
  );
}

export default App;
