export const CartItem = ({ data }) => {
  return (
    <li className="cart-item">
      <img className="cart-item__image" src={data.image} alt={data.title} />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{data.title}</h3>
        <div className="cart-item__quantity">
          <button className="cart-item__quantity-button cart-item__quantity-button_minus" />
          <input
            type="number"
            name=""
            id=""
            className="cart-item__quantity-input"
          />
          <button className="cart-item__quantity-button cart-item__quantity-button_plus" />
        </div>
        <p className="cart-item__price">{data.price}&nbsp;₽</p>
      </div>
    </li>
  );
};
