import React from 'react';
import logo from '../assets/hourglass-start-solid.svg';
import '../styles/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faThreads,
  faReddit,
  faYoutube,
  faPinterest,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="background-animation" />
      <main className="content">
        <img src={logo} alt="Logo" className="logo" />
        <p className="subheadline">Something great is on the way</p>
        <h1 className="headline">COMING SOON</h1>

        <div className="social-icons">
          <a href="https://facebook.com/pubuduishandigital" target="_blank" rel="noreferrer" className="icon facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://linkedin.com/in/pubuduishandigital" target="_blank" rel="noreferrer" className="icon linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://x.com/pubuduishandigi" target="_blank" rel="noreferrer" className="icon twitter">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a href="https://instagram.com/pubuduishandigital" target="_blank" rel="noreferrer" className="icon instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.threads.com/@pubuduishandigital" target="_blank" rel="noreferrer" className="icon threads">
            <FontAwesomeIcon icon={faThreads} size="2x" />
          </a>
          <a href="https://www.reddit.com/user/pubuduishandigital/" target="_blank" rel="noreferrer" className="icon reddit">
            <FontAwesomeIcon icon={faReddit} size="2x" />
          </a>
          <a href="https://www.youtube.com/@pubuduishandigital" target="_blank" rel="noreferrer" className="icon youtube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.pinterest.com/pubuduishandigital" target="_blank" rel="noreferrer" className="icon pinterest">
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </a>
          <a href="https://github.com/pubuduishandigital" target="_blank" rel="noreferrer" className="icon github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
