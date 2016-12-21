import React from 'react';

const STYLE = {
  CAPTION : {
    display : 'inline-block',
    color: 'rgb(128, 192, 64)',
    fontSize : '16px',
    fontWeight : 'bold',
    marginLeft : '16px',
  }
}

const Header = () => (
  <header className="header" role="banner">
    <span style={STYLE.CAPTION}>
      WebGL Topics v. 0.1.0
    </span>
    <nav className="header__nav" role="navigation">
       <a className="header__nav__link" href="">One</a>
       <a className="header__nav__link" href="">Two</a>
       <a className="header__nav__link" href="">Three</a>
    </nav>
  </header>
)

export default Header
