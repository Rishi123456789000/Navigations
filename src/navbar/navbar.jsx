import { Link } from "react-router-dom"







const Navbar = ()=>
{
    const linkstyle={textDecoration:"none" ,fontSize: '18px', fontWeight: 'bold', color: 'brown'}

    
    return(
        
        <>
        <div className="container mt-3">
  <ul className="nav nav-tabs">
    <li className="nav-item">
    <Link style={linkstyle} to={"login"}>Login</Link>
    </li>
    <li className="nav-item">
    <Link style={linkstyle} to={"products"}>products</Link>
    </li>
    <li className="nav-item">
    <Link style={linkstyle}to={"About"}>About</Link>
    </li>
    <li className="nav-item">
    <Link style={linkstyle}to={"category"}>catagoery</Link>
    </li>
  </ul>
</div>

        </>
    )
}
export default Navbar