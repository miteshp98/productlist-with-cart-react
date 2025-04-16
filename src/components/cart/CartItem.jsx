import Button from '../ui/Button';
import '../../styles/CartItem.css';

import removeIcon from '/images/icon-remove-item.svg';

function CartItem({ item, onRemoveItem }) {
  return (
    <li className="cart-item">
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>

        <div className="cart-item-bottom">
          <p className="cart-item-count">{item.quantity}x</p>
          <p className="cart-item-price">@${item.price.toFixed(2)}</p>
          <p className="cart-item-total">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <Button
        className={'cart-remove-item'}
        onClick={() => onRemoveItem(item.id)}
      >
        <img src={removeIcon} alt="remove-icon" />
      </Button>
    </li>
  );
}

export default CartItem;
