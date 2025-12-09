import React from 'react';
import { Link } from 'react-router-dom';
import './TopDestinations.css';

const TopDestinations = () => {
  const destinations = [
    { country: 'England', city: 'London', tours: 15, image: '/images/destination/destination1.jpg' },
    { country: 'Italy', city: 'Caspian Valley', tours: 18, image: '/images/destination/destination17.jpg' },
    { country: 'Tokyo', city: 'Japan', tours: 21, image: '/images/destination/destination14.jpg' },
    { country: 'Moscow', city: 'Russia', tours: 15, image: '/images/destination/destination15.jpg' },
    { country: 'Florida', city: 'America', tours: 32, image: '/images/destination/destination16.jpg' }
  ];

  return (
    <section className="trending pb-5 pt-0">
      <div className="container">
        <div className="section-title mb-6 w-50 mx-auto text-center">
          <h4 className="mb-1 theme1">Top Destinations</h4>
          <h2 className="mb-1">Explore <span className="theme">Top Destinations</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4">
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img src={destinations[0].image} alt={destinations[0].city} />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <h5 className="mb-0"><Link to="/destinations" className="theme1">{destinations[0].country}</Link></h5>
                    <h3 className="mb-0 white">{destinations[0].city}</h3>
                  </div>
                  <span className="white bg-theme p-1 px-2 rounded">{destinations[0].tours} Tours</span>
                </div>
                <div className="color-overlay"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {destinations.slice(1).map((dest, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-6 mb-4">
                  <div className="trend-item1">
                    <div className="trend-image position-relative rounded">
                      <img src={dest.image} alt={dest.city} />
                      <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                        <div className="trend-content-title">
                          <h5 className="mb-0"><Link to="/destinations" className="theme1">{dest.country}</Link></h5>
                          <h3 className="mb-0 white">{dest.city}</h3>
                        </div>
                        <span className="white bg-theme p-1 px-2 rounded">{dest.tours} Tours</span>
                      </div>
                      <div className="color-overlay"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;

