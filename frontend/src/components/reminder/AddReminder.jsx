
import React, { useState } from "react";
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBRadio}
from 'mdb-react-ui-kit';
import axios from "axios";
const AddReminder = () => {
    const [reminder, setReminder] = useState({
       
        time:"",
        medicinename:"",
        description:"",
      });
     
      let name, value,res;
    
      const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setReminder({ ...reminder, [name]: value });
      };
      const handleclick = (e) => {
        axios
        .post("http://localhost:8080/addreminder", reminder)
        .then((res) => {
          console.log(res);
        });
        alert("register Succesfully");
  
      };




  return (
    <MDBContainer fluid>

    <MDBRow className='justify-content-center align-items-center m-5'>

      <MDBCard>
        <MDBCardBody className='px-4'>

          <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">ADD YOUR Reminder</h3>

          <MDBRow>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Set Time' size='lg' id='time' name='time' type='time'  value={reminder.time}
        onChange={handleChange}/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Medicine Name' size='lg' id='medicinename' name='medicinename' type='text'  value={reminder.medicinename}
        onChange={handleChange}/>
            </MDBCol>

          </MDBRow>

          <MDBRow>
          <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Medicine Description' size='lg' id='description' name='description' type='text'  value={reminder.description}
        onChange={handleChange}/>
            </MDBCol>


          </MDBRow>


          <MDBBtn className='mb-4' size='lg' onClick={handleclick}>Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>

    </MDBRow>
  </MDBContainer>
  )
}

export default AddReminder;
