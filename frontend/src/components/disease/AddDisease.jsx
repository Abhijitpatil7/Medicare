import React, { useState } from "react";
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBRadio}
from 'mdb-react-ui-kit';
// import './Register.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddDisease() {

    const [disease, setDisease] = useState({
        diseasename:"",
        medicinedescription:""
      });
      let navigate = useNavigate();
      let name, value,res;
    
      const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setDisease({ ...disease, [name]: value });
      };
      const handleclick = (e) => {
        axios
        .post("http://localhost:8080/adddisease", disease)
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

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">ADD YOUR HEALTH ISSUES</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Disease Details' size='lg' id='diseasename' name='diseasename' type='text'  value={disease.diseasename}
          onChange={handleChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Medicine Description' size='lg' id='medicinedescription' name='medicinedescription' type='text'  value={disease.medicinedescription}
          onChange={handleChange}/>
              </MDBCol>

            </MDBRow>

            <MDBBtn className='mb-4' size='lg' onClick={handleclick}>Submit</MDBBtn>
          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  );
}

export default AddDisease;