import { Header, Profiles } from "../../components";
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";


const ProfileContainer = ({ setProfile, user }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src={LOGO} alt='Netflix' to={ROUTES.HOME} />
        </Header.Frame>

        <Profiles>
          <Profiles.Title>
            Who's watching?
          </Profiles.Title>

          <Profiles.List>
            <Profiles.User
              data-testid="user-profile"
              onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            >
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user?.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  )
}

export default ProfileContainer