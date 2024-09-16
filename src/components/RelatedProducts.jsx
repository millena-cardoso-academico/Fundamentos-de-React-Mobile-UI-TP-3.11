import PropTypes from 'prop-types';
import '../styles/RelatedProducts.css';

const RelatedProducts = ({ products }) => {
  return (
    <div className="related-products">
      <h3>Produtos Relacionados</h3>
      <div className="related-products-grid">
        {products.map((product, index) => (
          <div key={index} className="related-product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default RelatedProducts;