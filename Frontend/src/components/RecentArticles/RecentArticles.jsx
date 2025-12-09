import React from 'react';
import { Link } from 'react-router-dom';
import './RecentArticles.css';

const RecentArticles = () => {
  const articles = [
    {
      category: 'Technology',
      title: 'How a developer duo at Deutsche Bank keep remote alive.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      author: 'Sollmond Nell',
      authorImage: '/images/reviewer/2.jpg',
      image: '/images/trending/trending10.jpg'
    },
    {
      category: 'Inspiration',
      title: 'Inspire Runner with Autism Graces of Women\'s Running',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      author: 'David Scott',
      authorImage: '/images/reviewer/1.jpg',
      image: '/images/trending/trending12.jpg'
    },
    {
      category: 'Public',
      title: 'Services To Grow Your Business Sell Affiliate Products',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      author: 'John Bolden',
      authorImage: '/images/reviewer/3.jpg',
      image: '/images/trending/trending13.jpg'
    }
  ];

  return (
    <section className="trending recent-articles pb-6">
      <div className="container">
        <div className="section-title mb-6 w-75 mx-auto text-center">
          <h4 className="mb-1 theme1">Our Blogs Offers</h4>
          <h2 className="mb-1">Recent <span className="theme">Articles & Posts</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="recent-articles-inner">
          <div className="row">
            {articles.map((article, index) => (
              <div key={index} className={index === 0 ? 'col-lg-4' : 'col-lg-4 col-md-6'}>
                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                  <div className="trend-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="trend-content-main p-4 pb-2">
                    <div className="trend-content">
                      <h5 className="theme mb-1">{article.category}</h5>
                      <h4><Link to="/blog">{article.title}</Link></h4>
                      <p className="mb-3">{article.description}</p>
                      <div className="entry-meta d-flex align-items-center justify-content-between">
                        <div className="entry-author mb-2">
                          <img src={article.authorImage} alt={article.author} className="rounded-circle me-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="entry-button d-flex align-items-center mb-2">
                          <Link to="/blog" className="nir-btn">Read More</Link>
                        </div>
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

export default RecentArticles;

