import { Link } from 'react-router-dom';

const Navbar=(props)=>{
 return (
 <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
 <div className="container-fluid">
 
 <Link className="navbar-brand" to="/">TextUtils</Link>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span> </button>

 <div className="collapse navbar-collapse" id="navbarSupportedContent">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 <li className="nav-item">
 <Link className={`nav-link ${props.active==='Home'&& 'active'} `} onClick={()=>props.setActive("Home")} aria-current="page" to="/TextUtils-React/">Home</Link> </li>

 <li className="nav-item">
 <Link className={`nav-link ${props.active==='About' && 'active'}`} onClick={()=>props.setActive("About")} to="/about">About</Link> </li> 
 </ul>

 <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.text}</label>
</div>
    
</div> </div>
</nav>
);}

export default Navbar;