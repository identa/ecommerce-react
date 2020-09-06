import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import ProductItem from "../product/ProductItem";
import { Dropdown } from "react-bootstrap";

function ShopList({ catId }) {
  const [products, setProducts] = useState([]);

  const [pagination, setPagination] = useState({
    sort_by: "name",
    page_no: 0,
    page_size: 10,
    order_by: -1,
  });

  const [meta, setMeta] = useState(null);

  const activePage = () => {
    let items = document.getElementsByClassName("page-item")
    if(!pagination) return
    Array.from(items).forEach(element => {
      if(element.firstElementChild.innerText == pagination.page_no + 1) {
        element.classList.add('active')
      } else {
        element.classList.remove('active')
      }
    });
  }

  const changePage = (page) => {
    if(pagination.page_no == page) return
    let copy = Object.assign({}, pagination)
    copy.page_no = page
    setPagination(copy)
  }

  const changeOrder = (ord) => {
    if(pagination.order_by == ord) return
    let copy = Object.assign({}, pagination)
    copy.order_by = ord
    setPagination(copy)
  }

  useEffect(() => {
    ProductService.getByPagination(pagination).then((res) => {
      setProducts(res.data.data);
      setMeta(res.data.meta_data);
      activePage()
    });
  }, [pagination]);

  return (
    <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
      <div className="row mb-3 align-items-center">
        <div className="col-lg-6 mb-2 mb-lg-0">
          <p className="text-small text-muted mb-0">
            Showing 1–{meta && meta.page_size} of {meta && meta.total_element} results
          </p>
        </div>
        <div className="col-lg-6">
          <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
            <li className="list-inline-item text-muted mr-3">
              <a className="reset-anchor p-0" href="#">
                <i className="fas fa-th-large"></i>
              </a>
            </li>
            <li className="list-inline-item text-muted mr-3">
              <a className="reset-anchor p-0" href="#">
                <i className="fas fa-th"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <Dropdown>
                <Dropdown.Toggle
                  className="btn btn-secondary"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Default sorting
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item to="#" onClick={() => changeOrder(-1)}>Descend</Dropdown.Item>
                  <Dropdown.Item to="#" onClick={() => changeOrder(1)}>Ascend</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        {products.map((prod, index) => (
          <ProductItem data={prod} key={prod.id} />
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center justify-content-lg-end">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          {meta &&
            Array.from(Array(parseInt(meta.total_page))).map((num, i) => (
              <li className="page-item" onLoad={(e) => activePage(e, i)}>
                <button className="page-link" onClick={() => changePage(i)}>
                  {i + 1}
                </button>
              </li>
            ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ShopList;
