import './App.css';
import imgLogo from './image/image.svg';
import textLogo from './image/deviant-art-text.svg';

function App() {
  return (
    <div className="App">
      <div className="leftLayout">
        <div className="logo">
          <img src={imgLogo} />
          <img src={textLogo} />
        </div>
        <p className="description">
          JOIN THE LARGEST ART COMMUNITY IN THE WORLD
        </p>
        <p className="note">
          Explore and discover art, become a better artist, connect with others over mutual hobbies, or buy and sell work – you can do it all here.
        </p>
        <div className="creator">
          <p className="editBy">
            EDIT BY
          </p>
          <p className="nameCreator">
            Li
          </p>
        </div>    
      </div>
      <div className="rightLayout">
        Login
      </div>
    </div>
  );
}
export default App;
