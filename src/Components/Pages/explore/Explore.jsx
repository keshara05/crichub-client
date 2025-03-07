import React from "react";
import "./explore.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Explore = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rbgvsul', 'template_5mqy704', form.current, {
        publicKey: '1uUKfMHSToYNKwNrK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          form.current.reset();
        },
      );
  };


  return (
    <div className="explore-more">
      {/* System Features Section */}
      <section className="features-section">
        <h2>Features of Our System</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>View Matches</h3>
            <p>
              Stay updated with upcoming, live, and completed matches. Get
              details like teams, date, time, and venue.
            </p>
          </div>
          <div className="feature-card">
            <h3>Leaderboard</h3>
            <p>
              Check the rankings of clubs and players based on their performance
              in matches.
            </p>
          </div>
          <div className="feature-card">
            <h3>Players</h3>
            <p>
              Explore player profiles, stats, and performance history.
            </p>
          </div>
          <div className="feature-card">
            <h3>Clubs</h3>
            <p>
              View details of registered clubs, including their players, matches,
              and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us-section">
        <h2>Want to Join Us?</h2>
        <p>
          If you manage a cricket club and want to join our platform, contact us
          to create a club admin account. With an admin account, you can:
        </p>
        <ul>
          <li>Manage your club's matches and players.</li>
          <li>Update match results and player stats.</li>
          <li>Access advanced analytics and reports.</li>
          <li>Schedule matches and manage match details.</li>
          <li>Show live scoreboards and update scores in real-time.</li>
        </ul>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: support@crichub.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Or fill out the form below:</p>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </section>
    </div>
  );
};

export default Explore;