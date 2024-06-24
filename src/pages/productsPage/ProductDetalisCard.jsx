import React, { useState } from 'react'
import { Row, Col, Image, Button, NavItem } from 'react-bootstrap'
import { PlusCircle, DashCircle } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/slices/basketSlice';

function ProductDetalisCard({ id, title, description, price, img }) {

    const fcn = useDispatch();
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        if (count == 1) {
            setCount(count)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            img,
            title,
            description,
            count
        }
        fcn(addToBasket(payload));
    }



    return (
        <Row className='h-100 m-0 justify-content-center align-items-center'>
            <Col xs='10' sm='10' md='9' lg='5' xl='5' xxl='5' className='p-5 urun-resim'>
                <Image src={img} className='w-100 h-100 rounded' />
            </Col>
            <Col xs='12' sm='12' md='12' lg='7' xl='7' xxl='7' className='align-items-start justify-content-lg-center d-flex flex-column urun-bilgi'>
                <h2 className='text-center text-lg-start'>{title}</h2>
                <p className='yazi'>{description}</p>
                <p className='fiyat text-danger fw-bold ital'>Fiyat : {price} TL</p>
                <div className='icon align-items-center w-100 d-flex'>
                    <DashCircle onClick={() => decrement()} size={25} />  <span className='mx-2' style={{ fontSize: '35px' }}>{count}</span> <PlusCircle onClick={() => increment()} size={25} />
                </div>
                <Button onClick={() => addBasket()} variant='outline-primary'>Sepete Ekle</Button>

            </Col>
        </Row>
    )
}

export default ProductDetalisCard