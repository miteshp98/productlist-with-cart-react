import CartItem from './CartItem';

function CartList({ cartList, onRemoveItem }) {
  return (
    <ul className="cartlist">
      {cartList.map(item => (
        <CartItem item={item} key={item.id} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
}

export default CartList;
