import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Hero() {
    let pathname = useLocation().pathname;
    if (pathname === '/') {
      return (
        <section class="hero pb-3 bg-cover bg-center d-flex align-items-center" style={{background: "url(img/hero-banner-alt.jpg)"}}>
          <div class="container py-5">
            <div class="row px-4 px-lg-5">
              <div class="col-lg-6">
                <p class="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                <h1 class="h2 text-uppercase mb-3">20% off on new season</h1><a class="btn btn-dark" href="shop.html">Browse collections</a>
              </div>
            </div>
          </div>
        </section>
  )
    } else if(pathname.includes('/category')) {
      return (
      <section class="py-5 bg-light">
          <div class="container">
            <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div class="col-lg-6">
                <h1 class="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div class="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Shop</li>
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
