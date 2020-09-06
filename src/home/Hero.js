import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Hero() {
    let pathname = useLocation().pathname;
    if (pathname === '/') {
      return (
        <section className="hero pb-3 bg-cover bg-center d-flex align-items-center" style={{background: "url(img/hero-banner-alt.jpg)"}}>
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="shop.html">Browse collections</a>
              </div>
            </div>
          </div>
        </section>
  )
    } else if(pathname.includes('/categories')) {
      return (
      <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      )
    }
    
}

export default Hero
