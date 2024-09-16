import Menu from './Menu';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';
import Comments from './Comments';
import '../styles/App.css';

function App() {
  const product = {
    images: ['/path/to/image1.jpg', '/path/to/image2.jpg'],
    name: 'Smartphone XYZ',
    price: 799.99,
    description: 'Um smartphone de última geração com incríveis recursos.',
    specifications: ['Tela 6.5"', '128GB de Armazenamento', 'Câmera 64MP'],
  };

  const relatedProducts = [
    { image: '/path/to/related1.jpg', name: 'Smartwatch ABC', price: 199.99 },
    { image: '/path/to/related2.jpg', name: 'Fone de Ouvido DEF', price: 49.99 },
  ];

  const comments = [
    { name: 'João Silva', date: '01/09/2023', text: 'Excelente produto, recomendo!' },
    { name: 'Maria Oliveira', date: '02/09/2023', text: 'Muito bom, entrega rápida.' },
  ];

  return (
    <div className="app-container">
      <Menu />
      <div className="product-page">
        <ProductDetails {...product} />
        <RelatedProducts products={relatedProducts} />
        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default App;