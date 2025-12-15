import React from 'react';
import { Link } from 'react-router-dom';
import './BestTours.css';

const BestTours = () => {
  const tours = [
    { location: 'Croatia', title: 'Piazza Castello', days: 9, rating: 5, reviews: 12, price: 170, image: '/images/trending/trending2.jpg' },
    { location: 'Greece', title: 'Santorini, Oia', days: 9, rating: 5, reviews: 38, price: 180, image: '/images/trending/trending3.jpg' },
    { location: 'Maldives', title: 'Hurawalhi Island', days: 9, rating: 5, reviews: 18, price: 260, image: '/images/trending/trending4.jpg' },
    { location: 'Greece', title: 'Santorini, Oia', days: 5, rating: 5, reviews: 38, price: 180, image: '/images/trending/trending1.jpg' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`fa fa-star ${i < rating ? 'checked' : ''}`}></span>
    ));
  };

  return (
    <section className="trending pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-6">
          <div className="col-lg-7">
            <div className="section-title text-center text-lg-start">
              <h4 className="mb-1 theme1">Top Pick</h4>
              <h2 className="mb-1">Best <span className="theme">Tour Packages</span></h2>
              <p>Explore our curated collection of handpicked tour packages, each carefully designed by our AI to match different travel styles and preferences.</p>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <div className="trend-box">
          <div className="row item-slider">
            {tours.map((tour, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="trend-item rounded box-shadow">
                  <div className="trend-image position-relative">
                    <img src={tour.image} alt={tour.title} />
                    <div className="color-overlay"></div>
                  </div>
                  <div className="trend-content p-4 pt-5 position-relative">
                    <div className="trend-meta bg-theme white px-3 py-2 rounded">
                      <div className="entry-author">
                        <i className="icon-calendar"></i>
                        <span className="fw-bold"> {tour.days} Days Tours</span>
                      </div>
                    </div>
                    <h5 className="theme mb-1"><i className="flaticon-location-pin"></i> {tour.location}</h5>
                    <h3 className="mb-1"><Link to="/tours">{tour.title}</Link></h3>
                    <div className="rating-main d-flex align-items-center pb-2">
                      <div className="rating">
                        {renderStars(tour.rating)}
                      </div>
                      <span className="ms-2">({tour.reviews})</span>
                    </div>
                    <p className="border-b pb-2 mb-2">Immerse yourself in stunning landscapes, rich culture, and unforgettable experiences in this carefully selected destination.</p>
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0"><span className="theme fw-bold fs-5"> ${tour.price}.00</span> | Per person</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestTours;

