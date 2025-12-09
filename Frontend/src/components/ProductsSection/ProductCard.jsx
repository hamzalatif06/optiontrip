import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsSection.css';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return Array.from({ length: 5 }, (_, i) => {
      if (i < fullStars) {
        return <span key={i} className="fa fa-star checked"></span>;
      } else if (i === fullStars && hasHalfStar) {
        return <span key={i} className="fa fa-star-half-o checked"></span>;
      } else {
        return <span key={i} className="fa fa-star-o"></span>;
      }
    });
  };

  return (
    <div className="product-card trend-item rounded box-shadow">
      <div className="trend-image position-relative">
        <img src={product.image || '/images/trending/trending1.jpg'} alt={product.title} />
        <div className="color-overlay"></div>
        {product.discount && (
          <div className="product-badge position-absolute top-0 end-0 m-3 bg-theme white px-2 py-1 rounded">
            {product.discount}
          </div>
        )}
      </div>
      <div className="trend-content p-4 pt-5 position-relative">
        <h5 className="theme mb-1">
          <i className="flaticon-location-pin"></i> {product.category || 'Product'}
        </h5>
        <h3 className="mb-1">
          <Link to={product.url || '#'}>{product.title}</Link>
        </h3>
        {product.rating && (
          <div className="rating-main d-flex align-items-center pb-2">
            <div className="rating">
              {renderStars(product.rating)}
            </div>
            {product.reviews && (
              <span className="ms-2">({product.reviews})</span>
            )}
          </div>
        )}
        {product.description && (
          <p className="border-b pb-2 mb-2">{product.description}</p>
        )}
        <div className="entry-meta">
          <div className="entry-author d-flex align-items-center justify-content-between">
            <p className="mb-0">
              <span className="theme fw-bold fs-5">${product.price?.toFixed(2) || '0.00'}</span>
            </p>
            <a
              href={product.url || '#'}
              className="nir-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-bag me-2"></i> Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

