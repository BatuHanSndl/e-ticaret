import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/slices/productsSlice';
import ProductsCard from './ProductsCard';




function Products() {
    const products = useSelector(store => store.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <Container id='Products'>
            <Row className='h-100 m-0 justify-content-center align-items-center'>
                {
                    products.map(item => (
                        <ProductsCard key={item.id} id={item.id} title={item.title} img={item.image} price={item.price} />
                    ))
                }

            </Row>
        </Container>
    );
}

export default Products;
