export function updateCartQuantity(prevCart, id, actionType) {
    const isInCart = prevCart.find((item) => item.id === id);

    if (isInCart) {
        return prevCart
            .map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              actionType === "increment" ? item.quantity + 1 : item.quantity - 1,
                      }
                    : item
            )
            .filter((item) => item.quantity > 0);
    }

    return prevCart;
}
