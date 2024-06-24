import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDetalisCard from './ProductDetalisCard'

function ProductDetalis() {

    const products = useSelector(store => store.product.products)
    const { id } = useParams();



    return (
        <Container id='ProductDetails' className='p-2'>
            {
                products.map(item => {
                    if (item.id == id) {
                        return <ProductDetalisCard key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} img={item.image} />
                    }
                })
            }
        </Container>
    )
}

export default ProductDetalis