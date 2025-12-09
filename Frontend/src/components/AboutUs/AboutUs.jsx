import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const steps = [
    {
      icon: 'icon-flag',
      title: 'Tell Us What You want To Do',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      icon: 'icon-location-pin',
      title: 'Share Your Travel Locations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      icon: 'icon-directions',
      title: 'Share Your Travel Preference',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    },
    {
      icon: 'icon-compass',
      title: 'Get Your Perfect Trip with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
    }
  ];

  return (
    <section className="about-us pb-6 pt-6" style={{backgroundImage: `url(/images/shape4.png)`, backgroundPosition: 'center'}}>
      <div className="container">
        <div className="section-title mb-6 w-50 mx-auto text-center">
          <h4 className="mb-1 theme1">3 Step of The Perfect Tour</h4>
          <h2 className="mb-1">Find <span className="theme">Travel Perfection</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>

        <div className="why-us">
          <div className="why-us-box">
            <div className="row">
              {steps.map((step, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                  <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                    <div className="why-us-content">
                      <div className="why-us-icon">
                        <i className={`${step.icon} theme`}></i>
                      </div>
                      <h4><Link to="/about">{step.title}</Link></h4>
                      <p className="mb-0">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="white-overlay"></div>
    </section>
  );
};

export default AboutUs;

