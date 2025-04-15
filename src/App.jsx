import { useEffect, useState } from "react";
import "./App.css";

import CartContainer from "./components/CartContainer";
import ProductListContainer from "./components/ProductsListContainer";
import ProductList from "./components/productList/ProductList";
import ConfirmOrderModal from "./components/ConfirmOrderModal";

import { data } from "./data";
import { updateCartQuantity } from "./utils/updateCartQuantity";

function App() {
    const [cartItems, setCartList] = useState(() => {
        const storedValue = localStorage.getItem("cart");
        return JSON.parse(storedValue) || [];
    });
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleAddToCart(id) {
        const selectedProduct = data.find((prodcut) => prodcut.id === id);
        if (!selectedProduct) return;

        setCartList((prevCart) => {
            const isAlreadyInCart = prevCart.some((item) => item.id === id);
            if (isAlreadyInCart) return prevCart;

            return [...prevCart, { ...selectedProduct, quantity: 1 }];
        });
    }

    function handleRemoveItem(id) {
        setCartList((prevCart) =>
            prevCart
                .map((item) => (item.id === id ? { ...item, quantity: 0 } : item))
                .filter((item) => item.quantity > 0)
        );
    }

    function handleUpdateQuantity(id, actionType) {
        setCartList((prev) => updateCartQuantity(prev, id, actionType));
    }

    function handleOrderConfirmation(actionType) {
        if (actionType === "confirmation") {
            setIsConfirmed(true);
        } else {
            setCartList([]);
            setIsConfirmed(false);
        }
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="container">
            <ProductListContainer>
                <ProductList
                    productList={data}
                    onAddToCart={handleAddToCart}
                    cartItems={cartItems}
                    onQuantityChange={handleUpdateQuantity}
                />
            </ProductListContainer>
            <CartContainer
                cartList={cartItems}
                onRemoveItem={handleRemoveItem}
                onConfirm={handleOrderConfirmation}
            />

            {isConfirmed ? (
                <ConfirmOrderModal cartList={cartItems} onStartNewOrder={handleOrderConfirmation} />
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
