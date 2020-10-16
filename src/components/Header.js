import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="Nav-menus">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href={'/'}>
              Instagram
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div className="navbar-nav">
            <ul className="nav nav-justified">
              <li>
                <Link to={'/second'} className="nav-link">
                  Table
                </Link>
              </li>
              <li>
                <Link to={'/third'} className="nav-link">
                  Page3
                </Link>
              </li>
            </ul>
          </div>
        </div>
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
