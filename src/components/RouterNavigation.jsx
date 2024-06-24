import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/mainPage/Main'
import Products from '../pages/productsPage/Products'
import ProductDetalis from '../pages/productsPage/ProductDetalis'



function RouterNavigation() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product-details/:id' element={<ProductDetalis />} />
        </Routes>
    )
}

export default RouterNavigation