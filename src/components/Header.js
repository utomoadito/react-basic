import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-default">
      <div className="Nav-menus">
        <div className="Nav-brand">
          <a className="Nav-brand-logo" href={'/'}>
            Instagram
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to={'/second'} className="nav-link"> Table </Link></li>
          <li><Link to={'/third'} className="nav-link"> Halaman 3 </Link></li>
        </ul>
      </div>
    </nav>
  ) 
}
export default Header

// Cara sebelumnya yang agak panjang
// class Header extends React.Component{
//   render(){
//     return (
//       <nav className="Nav">
//         <div className="Nav-menus">
//           <div className="Nav-brand">
//             <a className="Nav-brand-logo" href="/">
//               Instagram
//             </a>
//           </div>
//         </div>
//       </nav>
//     )
//   } 
// }
// export default Header