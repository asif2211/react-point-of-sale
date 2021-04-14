import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import CustomerList from './Screens/Customer/CustomerList'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/Product' exact component={CustomerList} />
        <Route path="/customer" exact component={CustomerList}/>
        {/* <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        */}
      </Switch>
    </Router>
  );
}

export default App;
