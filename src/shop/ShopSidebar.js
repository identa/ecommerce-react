import React from "react";
import Nouislider from "nouislider-react";
// import "nouislider/distribute/nouislider.css";

function ShopSidebar() {
  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <h5 className="text-uppercase mb-4">Categories</h5>
      <div className="py-2 px-4 bg-dark text-white mb-3">
        <strong className="small text-uppercase font-weight-bold">
          Fashion &amp; Acc
        </strong>
      </div>
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Women's T-Shirts
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Men's T-Shirts
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Dresses
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Novelty socks
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Women's sunglasses
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Men's sunglasses
          </a>
        </li>
      </ul>
      <div className="py-2 px-4 bg-light mb-3">
        <strong className="small text-uppercase font-weight-bold">
          Health &amp; Beauty
        </strong>
      </div>
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Shavers
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            bags
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Cosmetic
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Nail Art
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Skin Masks &amp; Peels
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Korean cosmetics
          </a>
        </li>
      </ul>
      <div className="py-2 px-4 bg-light mb-3">
        <strong className="small text-uppercase font-weight-bold">
          Electronics
        </strong>
      </div>
      <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Electronics
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            USB Flash drives
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Headphones
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Portable speakers
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Cell Phone bluetooth headsets
          </a>
        </li>
        <li className="mb-2">
          <a className="reset-anchor" href="#">
            Keyboards
          </a>
        </li>
      </ul>
      <h6 className="text-uppercase mb-4">Price range</h6>
      <div className="price-range pt-4 mb-5">
        <Nouislider
          range={{ min: 0, max: 2000 }}
          start={[100, 1000]}
          connect
          tooltips
          step={5}
          direction="ltr"
          orientation="horizontal"
          behaviour="tap-drag"
          format={{
            to: function (value) {
              return "$" + value;
            },
            from: function (value) {
              return value.replace("", "");
            },
          }}
        />
        <div className="row pt-2">
          <div className="col-6">
            <strong className="small font-weight-bold text-uppercase">
              From
            </strong>
          </div>
          <div className="col-6 text-right">
            <strong className="small font-weight-bold text-uppercase">
              To
            </strong>
          </div>
        </div>
      </div>
      <h6 className="text-uppercase mb-3">Show only</h6>
      <div className="custom-control custom-checkbox mb-1">
        <input
          className="custom-control-input"
          id="customCheck1"
          type="checkbox"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customCheck1"
        >
          Returns Accepted
        </label>
      </div>
      <div className="custom-control custom-checkbox mb-1">
        <input
          className="custom-control-input"
          id="customCheck2"
          type="checkbox"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customCheck2"
        >
          Returns Accepted
        </label>
      </div>
      <div className="custom-control custom-checkbox mb-1">
        <input
          className="custom-control-input"
          id="customCheck3"
          type="checkbox"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customCheck3"
        >
          Completed Items
        </label>
      </div>
      <div className="custom-control custom-checkbox mb-1">
        <input
          className="custom-control-input"
          id="customCheck4"
          type="checkbox"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customCheck4"
        >
          Sold Items
        </label>
      </div>
      <div className="custom-control custom-checkbox mb-1">
        <input
          className="custom-control-input"
          id="customCheck5"
          type="checkbox"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customCheck5"
        >
          Deals &amp; Savings
        </label>
      </div>
      <div className="custom-control custom-checkbox mb-4">
        <input
          className="custom-control-input"
          id="customCheck6"
          type="checkbox"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customCheck6"
        >
          Authorized Seller
        </label>
      </div>
      <h6 className="text-uppercase mb-3">Buying format</h6>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          id="customRadio1"
          type="radio"
          name="customRadio"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customRadio1"
        >
          All Listings
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          id="customRadio2"
          type="radio"
          name="customRadio"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customRadio2"
        >
          Best Offer
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          id="customRadio3"
          type="radio"
          name="customRadio"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customRadio3"
        >
          Auction
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          id="customRadio4"
          type="radio"
          name="customRadio"
        />
        <label
          className="custom-control-label text-small"
          htmlFor="customRadio4"
        >
          Buy It Now
        </label>
      </div>
    </div>
  );
}

export default ShopSidebar;
