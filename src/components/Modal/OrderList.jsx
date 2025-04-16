import OrderItem from './OrderItem';

function OrderList({ cartList }) {
  return (
    <ul className="orderlist">
      {cartList.map(item => (
        <OrderItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default OrderList;
