import { Link, useNavigate} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

function HeaderComponent(){
    const isUserLogedin = AuthenticationService.isUserLogedin();
    console.log(isUserLogedin);
    return(
       <header>
           <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">Todo</div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           {isUserLogedin && <Link className="nav-link" to="/welcome/ganu">Home</Link>}                         
                        </li>
                        <li className="nav-item">
                            {isUserLogedin &&<Link className="nav-link" to="/todos">Todo</Link> }
                        </li>
                        <li className="nav-item dropdown">
                            {!isUserLogedin && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item">
                            {isUserLogedin && <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link>}
                        </li>                        
                    </ul>                
                    </div>
                </div>
           </div>
       </header>
    )
}

// This Code helps you to route header with your router
export const withRouter = (Component) => {
    const Wrapper = (props) => {
      const history = useNavigate();
      
      return (
        <Component
          history={history}
          {...props}
          />
      );
    };
    
    return Wrapper;
  };

export default withRouter(HeaderComponent);