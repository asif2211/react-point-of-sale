import logo from "./pos.png";
import { useState, Fragment, useEffect } from "react";
import { Wrapper } from "./styledapp";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Users } from "../src/redux/selector";
import allActions from "./../src/redux/action";
const App = () => {
  const AuthedUser = useSelector(Users);

  const dispatch = useDispatch();

  const user = { name: "Muhammad Asif" };

  useEffect(() => {
    dispatch(allActions.users.setUser(user));
  }, []);

  const [showsidebar, setShowsidebar] = useState(false);
  const handleToogle = () => setShowsidebar(!showsidebar);
  
  return (
    <Fragment>
      {AuthedUser.loggedIn === true? (
        <Wrapper>
          <Header
            userName={AuthedUser.user.name && AuthedUser.user.name}
            handleToogle={handleToogle}
            logo={logo}
          />
          <Sidebar handleToogle={handleToogle} sidebar={showsidebar} />
          <Main />
        </Wrapper>
      ) : (
        <div>please login</div>
      )}
    </Fragment>
  );
};

export default App;
