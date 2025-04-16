import illustration from '/images/illustration-empty-cart.svg';

function EmptyCart() {
  return (
    <div className="emptycart-container">
      <img src={illustration} alt="empty-cart" />
      <p>Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
