import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import GitHubLink from './GitHubLink';

const TITLE = 'WebGL Topics v0.2.0';

const HEADER = "header"
, CL_ICON_APP = `${HEADER}__icon-app`
, CL_LABEL_APP = `${HEADER}__label-app`
, CL_GITHUB_LINK = `${HEADER}__github-link`;

const Header = () => (
  <header className="header" role="banner">
    <IconAppLogo
      className={CL_ICON_APP}
      title={TITLE}
    />
    <AppLabel
      className={CL_LABEL_APP}
      caption={TITLE}
    />
    <GitHubLink
       className={CL_GITHUB_LINK}
       title="GitHub Repository"
       href="https://github.com/zhnzhn/webgl-topics/"
    />
  </header>
)

export default Header
