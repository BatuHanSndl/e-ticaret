import React, { useState } from 'react';
import { Container, Navbar, Nav, Form, Button, Offcanvas, Row, Col, Image } from 'react-bootstrap';
import { BasketFill, MoonFill, BrightnessHighFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [theme, setTheme] = useState(true);

    const productCount = useSelector(store => store.basket.products);

    const basket = useSelector(store => store.basket.products);

    const changeTheme = () => {
        const body = document.querySelector("body");
        if (theme) {
            body.style.backgroundColor = "black";
        } else {
            body.style.backgroundColor = "white";
        }
        setTheme(!theme);
    };

    return (
        <Navbar id="Header" expand="lg" variant='dark' className="bg-primary bg-opacity-100">
            <Container fluid>
                <Navbar.Brand className='logo text-uppercase'>logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className='left-menu me-auto text-capitalize'>
                        <Nav.Link as={Link} to='/' className='nav-item'>Anasayfa</Nav.Link>
                        <Nav.Link as={Link} to='/products' className='nav-item'>Ürünler</Nav.Link>
                    </Nav>
                    <Nav className='right-menu'>
                        <Nav.Link className='nav-item'>
                            <Form.Control />
                        </Nav.Link>

                        <Nav.Link className='nav-item position-relative p-0 m-0 my-1 mx-2'>
                            <BasketFill onClick={handleShow} size={20} color='white' className='' />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {productCount.length > 0 ? productCount.length : ""}
                            </span>
                            <Offcanvas placement='end' show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className='w-100'><h4 className='text-center text-uppercase'>ürün sepeti</h4></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    {
                                        basket.map(item => (
                                            <Row key={item.id}>
                                                <Col className='justify-content-center align-items-center d-flex flex-column p-2'>

                                                    <div className='sepet-resim'>
                                                        <Image src={item.img} width={70} height={70} />
                                                    </div>
                                                    <div className='sepet-bilgi p-2 text-center'>
                                                        <p className='m-0 mb-1'>{item.title}</p>
                                                        <p className='m-0 mb-1'>{item.price} TL</p>
                                                        <p className='m-0 mb-1'>{item.count} Adet</p>
                                                    </div>
                                                </Col>

                                            </Row>
                                        ))
                                    }
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Nav.Link>
                        {
                            theme ?
                                <Nav.Link className='nav-item'>
                                    <MoonFill onClick={changeTheme} size={20} color='white' />
                                </Nav.Link> :
                                <Nav.Link className='nav-item'>
                                    <BrightnessHighFill onClick={changeTheme} size={20} color='white' />
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
