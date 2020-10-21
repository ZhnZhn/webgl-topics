import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink';

const TITLE = 'WebGL Topics v0.1.0'

const Header = () => (
  <header className="header" role="banner">
    <IconAppLogo
      className="header__icon-app"
      title={TITLE}
    />
    <AppLabel
      className="header__label-app"
      caption={TITLE}
    />
    <GitHubLink
       className="header__github-link"
       title="GitHub Repository"
       href="https://github.com/zhnzhn/webgl-topics/"
    />
  </header>
)

export default Header
