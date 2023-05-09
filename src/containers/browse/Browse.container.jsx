import { useState, useEffect } from "react";

import { Card, Header, Loading, Player } from "../../components";
import * as ROUTES from "../../constants/routes";
import LOGO from "../../logo.svg";
import { auth } from "../../services/firebase";
import { signOut } from "firebase/auth";
import FooterContainer from "../footer/Footer.container";
import ProfileContainer from "../profile/Profile.contaier";

const Browse = ({ slides }) => {

  const [category, setCategory] = useState('series');
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const user = auth.currentUser || {};

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

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

      <Card.Group>
        {
          slideRows.map(items => (
            <Card key={`${category}-${items.title.toLowerCase()}`}>
              <Card.Title>
                {items.title}
              </Card.Title>

              <Card.Entities>
                {
                  items.data.map(item => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} alt='movies' />

                      <Card.Meta>
                        <Card.SubTitle>
                          {item.title}
                        </Card.SubTitle>

                        <Card.Text>
                          {item.description}
                        </Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))
                }
              </Card.Entities>

              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))
        }
      </Card.Group >

      <FooterContainer />

    </>
  ) : <ProfileContainer setProfile={setProfile} user={user} />
}

export default Browse