import './App.css';
import deviantArtLogo from './images/deviant-art.svg';
import deviantArtText from './images/deviant-art-text.svg';

function App() {
  return (
    <div className="container">
      <div className="modal">
        <div className="introduction">
          <div className="deviantArt">
            <img src={deviantArtLogo} />
            <img src={deviantArtText} />
          </div>
          <p className="joinCommunity">
            JOIN THE LARGEST ART COMMUNITY IN THE WORLD
          </p>
          <p className="joinDescription">
            Explore and discover art, become a better artist, connect with others over mutual hobbies, or buy and sell work – you can do it all here.
          </p>
          <div className="introBottom">
            <p className="artBy"> 
              ART BY
            </p>
            <p className="byMe"> 
              ekud
            </p>
          </div>
        </div>
        <div className="login-form">
          Log In
        </div>
      </div>
    </div>
  );
}

export default App;
