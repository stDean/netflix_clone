import { Header } from "../../components";
import LOGO from "../../logo.svg";
import * as ROUTES from "../../constants/routes";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={LOGO} alt="NetFlix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>
          Sign In
        </Header.ButtonLink>
      </Header.Frame>

      {children}
    </Header>
  )
}

export default HeaderContainer