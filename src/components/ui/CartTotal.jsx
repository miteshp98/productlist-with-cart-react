function CartTotal({ cartList, id }) {
    let totalCartAmount = cartList
        .map((item) => item.quantity * item.price)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="cart-total-container" id={id}>
            <p>Order Total</p>
            <h3 className="total">${totalCartAmount.toFixed(2)}</h3>
        </div>
    );
}

export default CartTotal;
