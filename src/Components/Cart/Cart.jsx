import PropTypes from "prop-types";

const Cart = ({cart, handleRemove}) => {
  
  return (
  
    <div className="text-center py-5">
      <h5 className="text-2xl font-medium">Add To Cart: {cart.length}</h5>
      {cart.map((bottle, idx) => (
        <div key={idx}>
          {" "}
          <h2 className="my-5">
            {bottle.name} - $<span>{bottle.price}</span>
            <a className="bg-[tomato] text-white cursor-pointer rounded-sm font-bold  ms-4 py-1 px-6" onClick={()=> handleRemove(bottle.id)}>X</a>
          </h2>{" "}
        </div>
      ))}
    </div>
  );
};


Cart.propTypes = {
    cart: PropTypes.array,
    handleRemove: PropTypes.func
  };

export default Cart;
