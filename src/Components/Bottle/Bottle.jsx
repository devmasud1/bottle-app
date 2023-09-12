import PropTypes from "prop-types";

const Bottle = ({ bottle, handleBuyNowBtn }) => {
  const { img, name, price } = bottle;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="bottle" className="w-[100%] h-3/4"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Price: $ <span>{price}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-default" onClick={()=> handleBuyNowBtn(bottle)}>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Bottle.propTypes = {
    bottle: PropTypes.array,
    handleBuyNowBtn: PropTypes.func
  };
  
export default Bottle;
