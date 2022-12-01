import React from "react";
import { TbShoppingCartPlus, TbHeartPlus } from "react-icons/tb";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card shadow h-100">
        <img
          src={thumbnail}
          className="card-img-top p-3"
          alt={title}
          height={180}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-secondary border-0">
              <TbHeartPlus size={20} />
            </button>
            <button className="btn btn-outline-secondary border-0">
              <TbShoppingCartPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
