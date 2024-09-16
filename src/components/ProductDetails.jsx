import PropTypes from 'prop-types';
import '../styles/ProductDetails.css';

const ProductDetails = ({ images, name, price, description, specifications }) => {
  return (
    <div className="product-details">
      <div className="product-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={name} />
        ))}
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <p className="product-price">${price}</p>
        <p>{description}</p>
        <ul className="product-specs">
          {specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  specifications: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductDetails;