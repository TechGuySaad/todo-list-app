
import { NavLink } from "react-router-dom"

import '../styles/navbar.css'

export default function NavBar(){


    


    
    return <div className="nav-bar">
      <NavLink   className="nav-link"  to='/' >Todo</NavLink>
      <NavLink  className="nav-link" to='/add-task'>Add Task</NavLink>
    </div>
}

// .active-link{
    //   border: 1px solid rgb(243, 241, 241);
    //   color: black;
    //   border-left: none;
    //   border-right: none;
    //   border-top: none;
    //   border-bottom-color: rgb(197, 3, 197);
    //   border-bottom-width: 4px;
    
//     }