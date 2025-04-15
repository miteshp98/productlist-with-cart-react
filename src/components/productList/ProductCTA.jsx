import Button from "../ui/Button";

import cartIcon from "/images/icon-add-to-cart.svg";
import incrementIcon from "/images/icon-increment-quantity.svg";
import decrementIcon from "/images/icon-decrement-quantity.svg";

function ProductCTA({ cartItems, productId, onAddToCart, onQuantityChange }) {
    const item = cartItems.find((item) => item.id === productId);
    const itemQuantity = item?.quantity || 0;
    const isInCart = itemQuantity > 0;

    return (
        <div className="product-cta">
            <Button
                className={`product-add-to-cart ${isInCart ? "product-add-to-cart--hide" : ""}`}
                onClick={() => onAddToCart(productId)}
            >
                <img src={cartIcon} alt="cart" />
                <span>Add to Cart</span>
            </Button>

            <div className={`product-counter ${isInCart ? "product-counter--show" : ""}`}>
                <Button
                    className={"product-count-btn"}
                    onClick={() => onQuantityChange(productId, "decrement")}
                >
                    <img src={decrementIcon} alt="decrement" />
                </Button>
                <p className="product-count">{itemQuantity}</p>
                <Button
                    className={"product-count-btn"}
                    onClick={() => onQuantityChange(productId, "increment")}
                >
                    <img src={incrementIcon} alt="increment" />
                </Button>
            </div>
        </div>
    );
}

export default ProductCTA;
