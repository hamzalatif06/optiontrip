import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jared Erondu',
      role: 'Supervisor',
      image: '/images/testimonial/img1.jpg',
      text: 'Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry\'s standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.'
    },
    {
      name: 'Jared Erondu',
      role: 'Supervisor',
      image: '/images/testimonial/img1.jpg',
      text: 'Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry\'s standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.'
    }
  ];

  return (
    <section className="testimonial pt-9" style={{backgroundImage: `url(/images/testimonial.png)`}}>
      <div className="container">
        <div className="section-title mb-6 text-center w-75 mx-auto">
          <h4 className="mb-1 theme1">Our Testimonails</h4>
          <h2 className="mb-1">Good Reviews By <span className="theme">Clients</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 pe-4">
            <div className="testimonial-image">
              <img src="/images/travel2.png" alt="Testimonials" />
            </div>
          </div>
          <div className="col-lg-7 ps-4">
            <div className="row review-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-sm-4 item">
                  <div className="testimonial-item1 rounded">
                    <div className="author-info d-flex align-items-center mb-4">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div className="author-title ms-3">
                        <h5 className="m-0 theme">{testimonial.name}</h5>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                    <div className="details">
                      <p className="m-0">
                        <i className="fa fa-quote-left me-2 fs-1"></i>{testimonial.text}
                      </p>
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

export default Testimonials;

