import "../../styles/OrderItem.css";

function OrderItem({ item }) {
    return (
        <li className="order-item">
            <div className="order-item-left-wrap">
                <img src={item.image.thumbnail} alt={item.name} />
                <div className="order-details">
                    <p className="order-name">{item.name}</p>

                    <div className="order-info">
                        <p className="order-quantity">{item.quantity}x</p>
                        <p className="order-price">@${item.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <p className="order-total-price">${(item.price * item.quantity).toFixed(2)}</p>
        </li>
    );
}
export default OrderItem;
