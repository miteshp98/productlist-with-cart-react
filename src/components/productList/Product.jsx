import ProductCTA from "./ProductCTA";
import ProductImg from "./ProductImg";

import "../../styles/Product.css";

function Product({ product, children, cartItems }) {
    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImg
                    image={product.image}
                    alt={product.name}
                    cartItems={cartItems}
                    id={product.id}
                />
                {children}
            </div>

            <div className="product-info">
                <p className="product-type">{product.category}</p>
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
        </li>
    );
}

export default Product;
