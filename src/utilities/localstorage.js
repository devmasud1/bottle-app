const getStoredCart = () => {
  const storeCart = localStorage.getItem("cart");
  if (storeCart) {
    return JSON.parse(storeCart);
  }
  return [];
};

const addLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();
  const remainingItem = cart.filter(id => id !== id);

  localStorage.setItem("cart", remainingItem);

};

export { getStoredCart, addLocalStorage, removeFromLocalStorage};