import React from 'react';


const About = () => {
  return (
    
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Bringing delicious food to your doorstep since 2020</p>
        </div>
        
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Bite Buddy, we believe great food should be convenient and accessible to everyone. 
            We partner with the best local restaurants to bring you diverse culinary experiences 
            with just a few taps on your phone.
          </p>
        </div>
        <div className="mission-image">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/612ba043-64ab-4c81-8656-cfcc221489b9.png" 
            alt="Variety of delicious dishes from partner restaurants arranged artistically" 
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="member-card">
            <div className="member-photo">
              <img 
                src="./src/assests/prince.jpg" 
                alt="Founder and CEO - Young professional smiling wearing business casual attire" 
              />
            </div>
            <h3>Prince</h3>
            <p className="position">Founder & CEO</p>
            <p className="bio">
              Food enthusiast with a vision to revolutionize food delivery services.
            </p>
          </div>

          <div className="member-card">
            <div className="member-photo">
              <img 
                src="./src/assests/sumeet.jpg" 
                alt="CTO - Tech professional with glasses working on laptop" 
              />
            </div>
            <h3>Sumeet</h3>
            <p className="position">CTO</p>
            <p className="bio">
              Leads our tech team to create seamless ordering experiences.
            </p>
          </div>

          <div className="member-card">
            <div className="member-photo">
              <img 
                src="src/assests/hitesh.jpg" 
                alt="Head of Operations - Professional woman organizing delivery schedule" 
              />
            </div>
            <h3>Hitesh</h3>
            <p className="position">Head of Operations</p>
            <p className="bio">
              Ensures our delivery network runs smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>We deliver hot, fresh food in 30 minutes or less.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤</div>
            <h3>Quality Food</h3>
            <p>Partnering with the best local restaurants.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">☀</div>
            <h3>Transparency</h3>
            <p>No hidden fees, clear pricing always.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Sustainability</h3>
            <p>Eco-friendly packaging and delivery methods.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-image">
          <img 
            src="./src/assests/res.jpg" 
            alt="Group of diverse Bite Buddy customers enjoying food from our partner restaurants" 
          />
        </div>
        <div className="community-content">
          <h2>Community Driven</h2>
          <p>
            We're proud to support local businesses and create employment opportunities 
            in the communities we serve. Through our partnership program, we've helped 
            over 500 small restaurants expand their customer base.
          </p>
          <button className="join-btn">Join Our Community</button>
        </div>
      </section>
    </div>
  );
};

export default About;