import ContainerTitle from './ui/ContainerTitle';
import '../styles/ProductListContainer.css';

function ProductListContainer({ children }) {
  return (
    <div className="product-list-container">
      <ContainerTitle type={'productListTitle'} className={'product-title'}>
        Desserts
      </ContainerTitle>
      {children}
    </div>
  );
}

export default ProductListContainer;
