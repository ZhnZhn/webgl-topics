import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import GitHubLink from './GitHubLink';

const TITLE = 'WebGL Topics v0.3.0';

const HEADER = "header"
, CL_ICON_APP = `${HEADER}__icon-app`
, CL_LABEL_APP = `${HEADER}__label-app`
, CL_GITHUB_LINK = `${HEADER}__github-link`;

const Header = () => (
  <header className="header">
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
       href="https://github.com/zhnzhn/webgl-topics/"
       ariaLabel="GitHub Repository"
    />
  </header>
)

export default Header
