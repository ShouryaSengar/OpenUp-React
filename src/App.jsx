import { useState } from 'react';
import './App.css';
import image1 from './assets/stop-violence-against-women-removebg-preview.png';
import image2 from './assets/CageFree.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [issueText, setIssueText] = useState('');
  const [answerText, setAnswerText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Handle form submission logic here using the formData state
  };

  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fa fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo"><a href="#">Open<span>Up!</span></a></div>
          <ul className="menu">
            <li><a href="#home">Get Help</a></li>
            <li><a href="#about">Identify Abuse</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="column left">
              <div className="text-2">Need Help Now??</div>
              <div className="text-1">We&apos; re here for you</div>
              <div className="text-3"> Let&apos; s <span className="typing"></span> </div>
              <a href="#about">Hello Sakhi!!</a>
            </div>
            <div className="column right">
              <img src={image1} alt="DV" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">Identify Abuse</h2>
          <div className="about-content">
            <div className="column left">
              <img src={image2} alt="" />
            </div>
            <div className="column right">
              <div className="text">Share your issue with Sakhi <span className="typing-2"></span></div>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <input
                    type="text"
                    id="issueTextarea"
                    placeholder="Ask your question to Sakhi...."
                    value={issueText}
                    onChange={(e) => setIssueText(e.target.value)}
                    required
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    id="answerTextarea"
                    cols="30"
                    rows="10"
                    placeholder="Your Answer.."
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Ask query?</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Us</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur quidem quod nulla
                numquam cupiditate blanditiis optio nesciunt modi minima!
              </p>
              <div className="icons">
                <div className="row">
                  <FontAwesomeIcon icon={faLandmark} size="lg" style={{ color: "#a88755" }} />
                  <div className="info">
                    <div className="head">Organization Name</div>
                    <div className="sub-title">OpenUp!!</div>
                  </div>
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" style={{ color: "#a88755" }} />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">XYZ, Jaipur, Rajasthan</div>
                  </div>
                </div>
                <div className="row">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#a88755" }} />
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">singhshourya2004@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message Us</div>
              <form onSubmit={handleSubmit2}>
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Describe project.."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <span>Created By <a href="#">Shourya Singh Sengar</a> | <span className="far fa-copyright"></span> 2023 All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
