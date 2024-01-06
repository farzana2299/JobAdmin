import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Header from './Header';
import { Link } from 'react-router-dom';
import { getAllUserApi } from '../service/allApi';

function User() {

    const [AllUsers, setAllUsers] = useState([])


    const getUsers = async () => {
        const result = await getAllUserApi()
        setAllUsers(result.data)
    }
    
    useEffect(() => {
        getUsers()
    }, [])
console.log(AllUsers);

  return (
    <div><Header></Header>
    <div className='w-75 container pt-5'>
    <Link style={{ textDecoration: 'none',position:'relative',right:'40%' }} to={'/dashboard'}><i class="fa-solid fa-backward fa-beat-fade"></i> Back </Link>
    <h3 className='text-center'>Registerd User Details</h3>
        <Table striped bordered  hover variant="success">
           
      <thead>
        <tr>
          <th>NO</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
          <th>GENDER</th>
          <th>LOCATION</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      {AllUsers?.length > 0 ?
    AllUsers.map(i=>(
      <tbody>
        <tr>
          <td>{i._id}</td>
          <td>{i.fname}</td>
          <td>{i.lname}</td>
          <td>{i.email}</td>
          <td>{i.ph}</td>
          <td>{i.gender}</td>
          <td>{i.location}</td>
          <th>
          <i class="fa-solid fa-trash text-danger"></i>
          </th>
        </tr>
      </tbody>)):<h1>Loading............</h1>
      }
    </Table>
    </div></div>
  )
}

export default User