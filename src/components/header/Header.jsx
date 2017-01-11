import React from 'react';

import GitHubLink from './GitHubLink';

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
       <a className="header__nav__link" href="javascript:void(0);">One</a>
       <a className="header__nav__link" href="javascript:void(0);">Two</a>
       <a className="header__nav__link" href="javascript:void(0);">Three</a>
       <GitHubLink
          className="header__github-link"
          title="GitHub Repo"
          href="https://github.com/zhnzhn/webgl-topics"
       />
    </nav>
  </header>
)

export default Header
