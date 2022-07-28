const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({
  auth: null,
  items: [],
  totalPrice: 0,
  setAuth: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  setItems: () => {}
});

const CartProvider = ({ children }) => {

  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const  [auth, setAuth] = useState(null);

  const addItemToCart = (item) => {
    setItems([
      ...items,
      item
    ]);
  };

  const removeItemFromCart = (id) => {
    setItems(prev => prev.filter(p => p.id !== id))
  };

  useEffect(() => {
    const TPrice = items.map(p => p.price)
    const sum = TPrice.reduce((partialSum, a) => partialSum + a, 0);
    setTotalPrice(sum)
  }, [items]);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setAuth(JSON.parse(localStorage.getItem('auth')))
    }
  }, [])

  return (
    <CartContext.Provider value={{
      items,
      totalPrice,
      addItemToCart,
      removeItemFromCart,
      auth,
      setAuth,
      setItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;