import { useState, useContext, createContext } from "react";
import { createPortal } from 'react-dom';

import { Button, Container, Inner, Overlay } from "./player.styles";

const PlayerContext = createContext();

const Player = ({ children, ...restProps }) => {

  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

export default Player

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  console.log(showPlayer);

  return (
    <Button
      onClick={() => setShowPlayer(showPlayer => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  // createPortal takes 2 args(the child(render-able react child), container(DOM element))
  return showPlayer ? createPortal(
    <Overlay
      {...restProps}
      onClick={() => setShowPlayer(false)}
      data-testid="player"
    >
      <Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
      </Inner>
    </Overlay>, document.body
  ) : null;
};
