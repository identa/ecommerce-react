import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Modal from "../home/Modal";
import ProductService from "../services/ProductService";
import Footer from "../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProductDetail(props) {
  const [product, setProduct] = useState({})
  const slideRef = useRef(null)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const onItemClick = (e, index) => {
    slideRef.current.slickGoTo(index)
  }

  const onDec = (e) => {
    // target = e.target
    
  }

  useEffect(() => {
    ProductService.getById(props.match.params.productId)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Modal />
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="row m-sm-0">
                <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
                  <div
                    className="owl-thumbs d-flex flex-row flex-sm-column"
                    data-slider-id="1"
                  >
                    {/* <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0">
                      <img
                        className="w-100"
                        src="/img/product-detail-1.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0">
                      <img
                        className="w-100"
                        src="/img/product-detail-2.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0" onClick={onItemClick}>
                      <img
                        className="w-100"
                        src="/img/product-detail-3.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="owl-thumb-item flex-fill mb-2">
                      <img
                        className="w-100"
                        src="/img/product-detail-4.jpg"
                        alt="..."
                      />
                    </div> */}
                    {product.image_urls && product.image_urls.map((img, index) => 
                    <div className="owl-thumb-item flex-fill mb-2" onClick={(e) => onItemClick(e, index)}>
                      <img
                        className="w-100"
                        src={img}
                        alt="..."
                      />
                    </div>)}
                  </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                  <Slider className="owl-carousel product-slider" {...settings} ref={slideRef}>
                    {/* <a
                      className="d-block"
                      href="/img/product-detail-1.jpg"
                      data-lightbox="product"
                      title="Product item 1"
                    >
                      <img
                        className="img-fluid"
                        src="/img/product-detail-1.jpg"
                        alt="..."
                      />
                    </a>
                    <a
                      className="d-block"
                      href="/img/product-detail-2.jpg"
                      data-lightbox="product"
                      title="Product item 2"
                    >
                      <img
                        className="img-fluid"
                        src="/img/product-detail-2.jpg"
                        alt="..."
                      />
                    </a>
                    <a
                      className="d-block"
                      href="/img/product-detail-3.jpg"
                      data-lightbox="product"
                      title="Product item 3"
                    >
                      <img
                        className="img-fluid"
                        src="/img/product-detail-3.jpg"
                        alt="..."
                      />
                    </a>
                    <a
                      className="d-block"
                      href="/img/product-detail-4.jpg"
                      data-lightbox="product"
                      title="Product item 4"
                    >
                      <img
                        className="img-fluid"
                        src="/img/product-detail-4.jpg"
                        alt="..."
                      />
                    </a> */}
                    {product.image_urls && product.image_urls.map((img, index) => 
                    <a
                    className="d-block"
                    href={img}
                    data-lightbox="product"
                    title="Product item 4"
                  >
                    <img
                      className="img-fluid"
                      src={img}
                      alt="..."
                    />
                  </a>)}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-inline mb-2">
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
              </ul>
                    <h1>{product.name}</h1>
              <p className="text-muted lead">{"$" + product.price}</p>
              <p className="text-small mb-4">
                {product.desc}
              </p>
              <div className="row align-items-stretch mb-4">
                <div className="col-sm-5 pr-sm-0">
                  <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                    <span className="small text-uppercase text-gray mr-4 no-select">
                      Quantity
                    </span>
                    <div className="quantity">
                      <button className="dec-btn p-0" onClick={onDec}>
                        <i className="fas fa-caret-left"></i>
                      </button>
                      <input
                        className="form-control border-0 shadow-0 p-0"
                        type="text"
                        defaultValue="1"
                      />
                      <button className="inc-btn p-0">
                        <i className="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 pl-sm-0">
                  <a
                    className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                    href="cart.html"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
              <a className="btn btn-link text-dark p-0 mb-4" href="#">
                <i className="far fa-heart mr-2"></i>Add to wish list
              </a>
              <br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white">
                  <strong className="text-uppercase">SKU:</strong>
                  <span className="ml-2 text-muted">039</span>
                </li>
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Category:</strong>
                  <a className="reset-anchor ml-2" href="#">
                    Demo Products
                  </a>
                </li>
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Tags:</strong>
                  <a className="reset-anchor ml-2" href="#">
                    Innovation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="description-tab"
                data-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="reviews-tab"
                data-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div className="tab-content mb-5" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <div className="p-4 p-lg-5 bg-white">
                <h6 className="text-uppercase">Product description </h6>
                <p className="text-muted text-small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="p-4 p-lg-5 bg-white">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="media mb-3">
                      <img
                        className="rounded-circle"
                        src="/img/customer-1.png"
                        alt=""
                        width="50"
                      />
                      <div className="media-body ml-3">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">
                          20 May 2020
                        </p>
                        <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-small mb-0 text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className="media">
                      <img
                        className="rounded-circle"
                        src="/img/customer-2.png"
                        alt=""
                        width="50"
                      />
                      <div className="media-body ml-3">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">
                          20 May 2020
                        </p>
                        <ul className="list-inline mb-1 text-xs">
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item m-0">
                            <i className="fas fa-star-half-alt text-warning"></i>
                          </li>
                        </ul>
                        <p className="text-small mb-0 text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h5 text-uppercase mb-4">Related products</h2>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img
                      className="img-fluid w-100"
                      src="/img/product-1.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#">
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#">
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
                  {" "}
                  <a className="reset-anchor" href="detail.html">
                    Kui Ye Chen’s AirPods
                  </a>
                </h6>
                <p className="small text-muted">$250</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img
                      className="img-fluid w-100"
                      src="/img/product-2.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#">
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#">
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
                  {" "}
                  <a className="reset-anchor" href="detail.html">
                    Air Jordan 12 gym red
                  </a>
                </h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img
                      className="img-fluid w-100"
                      src="/img/product-3.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#">
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#">
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
                  {" "}
                  <a className="reset-anchor" href="detail.html">
                    Cyan cotton t-shirt
                  </a>
                </h6>
                <p className="small text-muted">$25</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img
                      className="img-fluid w-100"
                      src="/img/product-4.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#">
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#">
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
                  {" "}
                  <a className="reset-anchor" href="detail.html">
                    Timex Unisex Originals
                  </a>
                </h6>
                <p className="small text-muted">$351</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ProductDetail;
