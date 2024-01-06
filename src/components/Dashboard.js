import React from 'react'
import Header from './Header'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <Header></Header>
          
            <div className='pt-5 pb-5'>
                <Row>

                    <Col lg={6} md={6}>
                        <Link to={'/company'} style={{textDecoration:'none'}}>
                            <a href="https://imgbb.com/">
                                <img src="https://i.ibb.co/PTm6vDk/download-15.png" alt="company icon" border="0" /></a>
                            <h4 className='text-dark'>Company Management</h4>
                        </Link>
                    </Col>

                    <Col lg={6} md={6}>
                        <Link to={'/user'} style={{textDecoration:'none'}}>
                            <a href="https://imgbb.com/">
                                <img src="https://i.ibb.co/zrp5FcV/user-removebg.png" alt="user-removebg" border="0" /></a>
                            <h4 className='text-dark'>User Management</h4>
                        </Link>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default Dashboard