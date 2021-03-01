import logo from "./pos.png";
import {useState, Fragment,useEffect} from 'react'
import {Wrapper} from './styledapp'
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import {useDispatch,useSelector} from 'react-redux';
import allActions from './../src/redux/action';
const  App = ()=> {
  const AuthedUser = useSelector(state=>state.users)
  const dispatch = useDispatch()

  const user = {name: "Rei"}

  useEffect(() => {
    dispatch(allActions.users.setUser(user))
  }, [])

  const [showsidebar, setShowsidebar] = useState(false);
  const handleToogle = () => setShowsidebar(!showsidebar);
  return (
    <Fragment>
{AuthedUser.loggedIn ? <Wrapper>
      <Header handleToogle={handleToogle} logo={logo}/>
      <Sidebar handleToogle={handleToogle} sidebar={showsidebar}/>
      <Main/>
    </Wrapper>
    :
<div>please login</div>}
    
    </Fragment>
    
  );
}

export default App;
