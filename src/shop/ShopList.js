import React, { useState, useEffect } from "react";
import ProductService from '../services/ProductService'

function ShopList() {
  const [products, setProducts] = useState([])


  useEffect(() => {
    ProductService.getByCategory("5f44a3b9865e2b33189c0580")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
  }, [])

    return (
        <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        <div className="row mb-3 align-items-center">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <p className="text-small text-muted mb-0">Showing 1–12 of 53 results</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
              <li className="list-inline-item text-muted mr-3"><a className="reset-anchor p-0" href="#"><i className="fas fa-th-large"></i></a></li>
              <li className="list-inline-item text-muted mr-3"><a className="reset-anchor p-0" href="#"><i className="fas fa-th"></i></a></li>
              <li className="list-inline-item">
                <select className="selectpicker ml-auto" name="sorting" data-width="200" data-style="bs-select-form-control" data-title="Default sorting">
                  <option value="default">Default sorting</option>
                  <option value="popularity">Popularity</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {products.map((prod,index) => 
            <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={prod.imgs[0]} alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">{prod.name}</a></h6>
              <p className="small text-muted">{prod.price}</p>
            </div>
          </div>
          )}
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-primary">New</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-info">Sale</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-5.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Red digital smartwatch</a></h6>
              <p className="small text-muted">$250</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-6.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Nike air max 95</a></h6>
              <p className="small text-muted">$300</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-7.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
              <p className="small text-muted">$25</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-8.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Apple Watch</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-danger">Sold</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-9.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Men silver Byron Watch</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-primary">New</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-10.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Ploaroid one step camera</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-11.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Gray Nike running shoes</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white badge-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-12.jpg" alt="..."/></a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand"></i></a></li>
                  </ul>
                </div>
              </div>
              <h6> <a className="reset-anchor" href="detail.html">Black DSLR lense</a></h6>
              <p className="small text-muted">$351</p>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center justify-content-lg-end">
            <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
          </ul>
        </nav>
      </div>
    )
}

export default ShopList
