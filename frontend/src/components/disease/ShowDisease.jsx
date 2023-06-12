import React from 'react'
import  { MDBContainer,MDBRow} from 'mdb-react-ui-kit';
import axios from "axios"
import { useEffect, useState  } from "react"
import './ShowDisease.css'
const ShowDisease = () => {


  

    let user;
  
  const [user7, setUser7] = useState([])
  
    useEffect(() => {
      user = axios.get(`http://localhost:8080/showdisease`).then((res)=>{
      console.log(res)
        setUser7(res.data)
        console.log(user7)
        
    })
    }, [])
 
  return (
<MDBContainer fluid>
<MDBRow className='justify-content-center align-items-center m-5'>
<h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Track Your Health Issues</h3>
<table className="table">
  <tr>
  <th scope="col">Sr.NO</th>
        <th scope="col">Disease Name</th>
        <th scope="col">Medicine Description</th>
    </tr>
{
  user7.map((current)=>{
    return(
      <>
      <tr>
      <td scope='row'> {current.id}</td>
      <td scope='row'> {current.diseasename}</td>
      <td scope='row'> {current.medicinedescription}</td>
     
      </tr> 
      </>
    )
  })
}
     
</table>
 
</MDBRow>
</MDBContainer>

  )
}

export default ShowDisease
