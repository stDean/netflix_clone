import { useState } from "react";

import { Header } from "../../components";
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";
import { auth } from "../../services/firebase";
import { signOut } from "firebase/auth";
import FooterContainer from "../footer/Footer.container";

const Browse = ({ slides }) => {

  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const user = auth.currentUser || {};
  console.log(user);

  return (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src={LOGO}
              alt="Netflix"
            />

            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>

            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <Header.Profile>
              <Header.Picture src={user.photoURL} />

              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink
                    onClick={() => signOut(auth)}
                  >
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>

          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>

          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </>
  )
}

export default Browse