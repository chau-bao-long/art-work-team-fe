import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import deviantArtLogo from './images/deviant-art.svg';
import deviantArtText from './images/deviant-art-text.svg';
import {useHistory} from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3000';

async function getUsers() {
  const response = await axios.get('/api/user');
  return response.data;
}

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(async () => {
    const users = await getUsers();
    setUsers(users);
  }, []);

  const handleNameChanged = (value) => {
    setName(value.target.value);
  };

  const handlePassChanged = (value) => {
    setPassword(value.target.value);
  };

  const handleClickButton = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/login', {
        name: name,
        password: password,
      });
      
      history.push('/home');
    } catch(e) {
      setError(e.response.data.error);
    }
  };

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
        {
          users.map((user) => {
            return (
              <div>
                <p className="user">{user.name}</p>
                <p className="user">{user.password}</p>
              </div>
            );
          })
        }
        </div>
        <div className="login-form">
          <form>
            <label for="name">Your name</label>
            <input id="name" type="text" label="name" onChange={handleNameChanged} value={name} />
            <label for="pass">Your password</label>
            <input id="pass" type="number" onChange={handlePassChanged} value={password} />
            {error && (
              <p className="error">{error}</p>
            )}

            <button className="submitButton" onClick={handleClickButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
