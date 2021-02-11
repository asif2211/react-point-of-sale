import  '../components/Navbar.css';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-icon">
            <i className="fa fa-bars"></i>
            </div>
            <div className="navbar-left">
                
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="" className="active-link">Home</a>
            </div>
            <div className="navbar-right">
            <a href="">
                <i className="fa fa-search"></i>
            </a>
            <a href="">
                <i className="fa fa-clock-o"></i>
            </a>
            
            </div>
        </div>
     );
}
 
export default Navbar;