import illustration from "/images/icon-carbon-neutral.svg";

function CartMsg() {
    return (
        <div className="cart-msg-wrap">
            <img src={illustration} alt="carbon-neutral" />
            <p>
                This is a <strong>carbon - neutral </strong>delivery
            </p>
        </div>
    );
}

export default CartMsg;
