import React from "react";
import LazyImage from "../images/LazyImage";
import { Link } from "react-router-dom";

function ProductItem({ data }) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="product text-center">
        <div className="mb-3 position-relative">
          <div className="badge text-white badge-primary">{data.tag}</div>
          <Link className="d-block" to={"/product/" + data._id}>
            <LazyImage src={data.imgs[0]} alt={"..."} />
          </Link>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-outline-dark" href="#">
                  <i className="far fa-heart"></i>
                </a>
              </li>
              <li className="list-inline-item m-0 p-0">
                <a className="btn btn-sm btn-dark" href="cart.html">
                  Add to cart
                </a>
              </li>
              <li className="list-inline-item mr-0">
                <a
                  className="btn btn-sm btn-outline-dark"
                  href="#productView"
                  data-toggle="modal"
                >
                  <i className="fas fa-expand"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          <a className="reset-anchor" href="detail.html">
            {data.name}
          </a>
        </h6>
        <p className="small text-muted">{data.unit + data.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
