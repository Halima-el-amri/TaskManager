import React from 'react'
import { Link,useLocation} from 'react-router-dom'

export default function () {
   //const location= uselocation();

  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light  ml-5">
         <Link className="navbar-brand" href="#">      Task_Manger </Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className={`nav-link ${location ==='/' ? 'active' : '' }`} to="/"><i className="fas fa-home"></i>Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item ">
          <Link className={`nav-link ${location ==='/create' ? 'active' : '' }`} to="/create"><i className="fas fa-edit"></i>Create_Task <span className="sr-only">(current)</span></Link>
      </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown 
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>

    </div>
  </nav>
  )
}
