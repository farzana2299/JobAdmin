import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Header from './Header';
import { Link } from 'react-router-dom';
import { getAllCompanyApi } from '../service/allApi';

function Company() {

    const [AllCompanies, setAllCompanies] = useState([])


    const getCompanies = async () => {
        const result = await getAllCompanyApi()
        setAllCompanies(result.data)
    }
    
    useEffect(() => {
        getCompanies()
    }, [])
console.log(AllCompanies);
  return (
    <div>
        <Header></Header>
        <Link style={{ textDecoration: 'none',position:'relative',right:'40%' }} to={'/dashboard'}><i class="fa-solid fa-backward fa-beat-fade"></i> Back </Link>

    <div className='w-75 container pt-5'>
    <h3 className='text-center'>REGISTERED COMPANY DETAILS</h3>
   
        <Table striped bordered  hover variant="success">
        
      <thead>
        <tr>
        <th>ID</th>
          <th>COMPANY NAME</th>
          <th>EMAIL</th>
          <th>LOGO</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      {AllCompanies?.length > 0 ?
    AllCompanies.map(i=>(
      <tbody>
        <tr>
          <td>{i._id}</td>
          <td>{i.cname}</td>
          <td>{i.email}</td>
          <td>{i.logo}</td>
          <th>
          <i class="fa-solid fa-trash text-danger"></i>
          </th>
        </tr>
      </tbody>)):<h1>Loading............</h1>
      }
    </Table>
    </div>
    </div>
  )
}

export default Company