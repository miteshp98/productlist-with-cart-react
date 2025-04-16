import { createPortal } from 'react-dom';
import ContainerTitle from './ui/ContainerTitle';
import Button from './ui/Button';
import OrderList from './Modal/OrderList';

import '../styles/ConfirmOrderModal.css';
import CartTotal from './ui/CartTotal';

function ConfirmOrderModal({ cartList, onStartNewOrder }) {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <img src="images/icon-order-confirmed.svg" alt="confirm-order" />
          <ContainerTitle className={'modal-title'}>
            Order Confirmed
          </ContainerTitle>
          <p>We hope you enjoy your food</p>
        </div>
        <div className="orderlist-wrap">
          <OrderList cartList={cartList} />
          <CartTotal cartList={cartList} id={'confirm-total'} />
        </div>
        <Button className={'new-order-btn'} onClick={() => onStartNewOrder('')}>
          <span>Start New Order</span>
        </Button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default ConfirmOrderModal;
