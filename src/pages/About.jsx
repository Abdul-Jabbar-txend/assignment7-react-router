import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  // Function to handle the navigation with state
  const handleReadMore = () => {
    navigate("/more", {
      state: {
        title: "About Our Company - 9 Years of Excellence",
        content:
          "Founded 9 years ago, our company has been at the forefront of software innovation. We specialize in providing cutting-edge software solutions, ranging from custom web and mobile app development to AI and machine learning integrations. Over the years, we've built a reputation for delivering high-quality products, on time and within budget.\n\nOur notable achievements include developing over 200 successful projects for clients globally, receiving multiple awards for our innovative solutions, and being recognized as one of the top emerging tech companies in the industry. Our team is committed to using the latest technologies such as React, Node.js, Python, and AI frameworks to create scalable, secure, and user-centric products.\n\nWe are proud of our journey and excited about the future as we continue to evolve and provide value to our clients.",
      },
    });
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        We specialize in developing cutting-edge solutions for various domains
        including Web App Development and AI. Our team is dedicated to
        delivering top-notch services and products to our clients.
      </p>

      <div className="cards-container">
        <div className="card">
          <h2 className="card-title">Web App Development</h2>
          <p className="card-text">
            We build robust, scalable, and user-friendly web applications
            tailored to meet your business needs.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">AI Development</h2>
          <p className="card-text">
            Our AI development team leverages advanced algorithms and machine
            learning to create intelligent solutions.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Mobile App Development</h2>
          <p className="card-text">
            We also specialize in developing cross-platform mobile applications
            to engage users on all devices.
          </p>
        </div>
      </div>

      {/* Read More link */}
      <div className="read-more-container">
        <button
          className="read-more-button"
          title="useNavigate to passData"
          onClick={handleReadMore}
        >
          Read More Us
        </button>
      </div>
    </div>
  );
};

export default About;
