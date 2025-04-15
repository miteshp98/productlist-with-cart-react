import ContainerTitle from "./ui/ContainerTitle";
import "../styles/CartContainer.css";
import CartList from "./cart/CartList";
import CartTotal from "./ui/CartTotal";
import CartMsg from "./cart/CartMsg";
import Button from "./ui/Button";
import EmptyCart from "./cart/EmptyCart";

function CartContainer({ cartList, onRemoveItem, onConfirm }) {
    const cartTotalItem = cartList
        .map((item) => item.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="cart-container">
            <ContainerTitle className={"cart-title"}>Your Cart ({cartTotalItem})</ContainerTitle>
            {cartList.length > 0 ? (
                <>
                    <CartList cartList={cartList} onRemoveItem={onRemoveItem} />
                    <CartTotal cartList={cartList} />
                    <CartMsg />
                    <Button
                        className={"confirm-order-btn"}
                        onClick={() => onConfirm("confirmation")}
                    >
                        Confirm Order
                    </Button>
                </>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
}

export default CartContainer;
