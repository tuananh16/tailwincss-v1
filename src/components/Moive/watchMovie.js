import React from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

function WatchMovie() {
  return (
    <Player>
      <source src="https://vip.opstream16.com/share/7362b26d78069dd38f4b45743fddc7eeD"  />
    </Player>
  );
}

export default WatchMovie;
