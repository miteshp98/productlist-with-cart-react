function ProductImg({ cartItems, image, alt, id }) {
  const quantity = cartItems.find(item => item.id === id)?.quantity;
  return (
    <picture>
      <source media="(min-width:1024px )" srcSet={image?.desktop} />
      <source media="(min-width:990px )" srcSet={image?.tablet} />
      <source media="(min-width:700px )" srcSet={image?.mobile} />
      <img
        src={image?.desktop}
        alt={alt}
        className={`${quantity > 0 ? 'product-img--border ' : ''}`}
      />
    </picture>
  );
}

export default ProductImg;
