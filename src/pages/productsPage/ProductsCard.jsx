import React from 'react'
import { Col, Card, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ProductsCard({ id, title, img, price }) {

    const navigate = useNavigate();

    return (
        <Col xs='8' sm='9' md='6' lg='5' xxl='4' className='urun-kutu p-4'>
            <Card className='urun-card'>
                <Card.Header className='card-baslik bg-transparent border-0 h4 text-capitalize justify-content-center align-items-center d-flex text-center'>{title}</Card.Header>
                <Card.Body className='card-resim p-5'>
                    <Image src={img} className='w-100 h-100' />
                </Card.Body>
                <Card.Footer className='card-bilgi justify-content-center align-items-center d-flex flex-column bg-transparent border-0'>
                    <p className='urun-fiyat'>Fiyat : {price} TL</p>
                    <Button onClick={() => navigate(`/product-details/${id}`)} type='button' className='w-100' variant='outline-primary'>ÜRÜN DETAYLARI</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default ProductsCard