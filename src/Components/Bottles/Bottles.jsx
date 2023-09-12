import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import {
  addLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
} from "../../utilities/localstorage";

const Bottles = () => {
  const [bottles, setBottle] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("BottleData.json")
      .then((res) => res.json())
      .then((data) => setBottle(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCard = getStoredCart();

      const saveCard = [];

      for (const id of storedCard) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCard.push(bottle);
        }
      }

      setCart(saveCard);
    }
  }, [bottles]);

  const handleBuyNowBtn = (bottle) => {
    const newCardData = [...cart, bottle];
    setCart(newCardData);

    addLocalStorage(bottle.id);
  };

  const handleRemove = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);

    removeFromLocalStorage(id);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-semibold">
        Total item: {bottles.length}
      </h1>
      <Cart cart={cart} handleRemove={handleRemove}></Cart>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleBuyNowBtn={handleBuyNowBtn}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
