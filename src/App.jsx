import { useEffect, useState } from 'react';
import { useFetch } from './Hooks/useFetch';
import './App.css';

import CartContainer from './components/CartContainer';
import ProductListContainer from './components/ProductsListContainer';
import ProductList from './components/productList/ProductList';
import ConfirmOrderModal from './components/ConfirmOrderModal';
import Loader from './components/ui/Loader';

import { updateCartQuantity } from './utils/updateCartQuantity';

function App() {
  const [cartItems, setCartList] = useState(() => {
    const storedValue = localStorage.getItem('cart');
    return JSON.parse(storedValue) || [];
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isLoading, productList } = useFetch('/data.json');

  function handleAddToCart(id) {
    const selectedProduct = productList.find(prodcut => prodcut.id === id);
    if (!selectedProduct) return;

    setCartList(prevCart => {
      const isAlreadyInCart = prevCart.some(item => item.id === id);
      if (isAlreadyInCart) return prevCart;

      return [...prevCart, { ...selectedProduct, quantity: 1 }];
    });
  }

  function handleRemoveItem(id) {
    setCartList(prevCart =>
      prevCart
        .map(item => (item.id === id ? { ...item, quantity: 0 } : item))
        .filter(item => item.quantity > 0)
    );
  }

  function handleUpdateQuantity(id, actionType) {
    setCartList(prev => updateCartQuantity(prev, id, actionType));
  }

  function handleOrderConfirmation(actionType) {
    if (actionType === 'confirmation') {
      setIsConfirmed(true);
    } else {
      setCartList([]);
      setIsConfirmed(false);
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="container">
      <ProductListContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductList
            productList={productList}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onQuantityChange={handleUpdateQuantity}
          />
        )}
      </ProductListContainer>
      <CartContainer
        cartList={cartItems}
        onRemoveItem={handleRemoveItem}
        onConfirm={handleOrderConfirmation}
      />

      {isConfirmed ? (
        <ConfirmOrderModal
          cartList={cartItems}
          onStartNewOrder={handleOrderConfirmation}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
