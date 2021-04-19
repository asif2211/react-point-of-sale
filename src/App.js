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

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/Product' exact component={CustomerList} />
        <Route path="/category" component={CategoryList}/>
        <Route path="/addcategory/:id" component={Category}/>
        <Route path="/customer" exact component={CustomerList}/>
        <Route path='/parents/:id' exact component={Parents} />
        <Route path='/parentlist' exact component={ParentsList} />
        <Route path="/create/:id" component={Customer}/>
      </Switch>
    </Router>
  );
}

export default App;
