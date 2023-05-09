import { useState } from "react";

import { Header } from "../../components";
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";
import { auth } from "../../services/firebase";
import { signOut } from "firebase/auth";

const Browse = ({ slides }) => {

  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const user = auth.currentUser || {};
  console.log(user);

  return (
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
          </Header.Profile>

          {/* <button onClick={() => {
            signOut(auth)
            localStorage.removeItem("userAuth")
          }}>
            sign out
          </button> */}
        </Header.Group>
      </Header.Frame>
    </Header>
  )
}

export default Browse