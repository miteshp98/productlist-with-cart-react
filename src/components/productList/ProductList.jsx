import Product from './Product';
import ProductCTA from './ProductCTA';

function ProductList({
  productList,
  onAddToCart,
  cartItems,
  onQuantityChange
}) {
  return (
    <ul className="product-list">
      {productList.map(product => (
        <Product product={product} key={product.id} cartItems={cartItems}>
          <ProductCTA
            productId={product.id}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            onQuantityChange={onQuantityChange}
          />
        </Product>
      ))}
    </ul>
  );
}

export default ProductList;
