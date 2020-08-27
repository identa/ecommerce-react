import React from 'react'
import Modal from './home/Modal'
import Hero from './home/Hero'
import ShopSidebar from './shop/ShopSidebar'
import ShopList from './shop/ShopList'

function Category(props) {
    return (
        <>
        <Modal />
            <div className="container">
              <Hero />
              <section class="py-5">
                <div class="container p-0">
                  <div class="row">
                    <ShopSidebar />
                    <ShopList catId={props.match.params.catId}/>
                  </div>
                </div>
              </section>
            </div>
            </>
    )
}

export default Category
