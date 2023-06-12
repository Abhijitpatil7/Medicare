import React from 'react'
import  { MDBContainer,MDBRow} from 'mdb-react-ui-kit';
import axios from "axios"
import { useEffect, useState  } from "react"
import './ShowReminder.css'

const ShowReminder = () => {


    let user;
  
  const [user7, setUser7] = useState([])
  
    useEffect(() => {
      user = axios.get(`http://localhost:8080/showreminder`).then((res)=>{
      console.log(res)
        setUser7(res.data)
        console.log(user7)
        
    })
    }, [])




  return (
    <MDBContainer fluid>
<MDBRow className='justify-content-center align-items-center m-5'>
<h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Gentle Reminder...!!</h3>
<table className="table">
  <tr>
  <th scope="col">Sr.NO</th>
  <th scope="col">Time</th>
        <th scope="col">Medicine Name</th>
        <th scope="col">Medicine Description</th>
    </tr>
{
  user7.map((current)=>{
    return(
      <>
      <tr>
      <td> {current.id}</td>
      <td> {current.time}</td>
      <td> {current.medicinename}</td>
      <td> {current.description}</td>
     
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

export default ShowReminder;
