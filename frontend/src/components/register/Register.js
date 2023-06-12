import React, { useState } from "react";
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBRadio}
from 'mdb-react-ui-kit';
import './Register.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        dateofbirth:"",
        email: "",
        gender:"",
        mobilenumber:"",
        password: "", 
      });
      let navigate = useNavigate();
      let name, value,res;
    
      const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
      };
      const handleclick = (e) => {
        axios
        .post("http://localhost:8080/register", user)
        .then((res) => {
          console.log(res);
        });
        alert("register Succesfully");
      navigate('/');
      };

  return (
    <MDBContainer fluid className="internal">

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='firstname' name='firstname' type='text'  value={user.firstname}
          onChange={handleChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='lastname' name='lastname' type='text'  value={user.lastname}
          onChange={handleChange}/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Date of birth' size='lg' id='dateofbirth' name='dateofbirth' type='date'  value={user.dateofbirth}
          onChange={handleChange}/>
              </MDBCol>

              <MDBCol md='6' className='mb-4' name='gender' id='gender'  value={user.gender}
             onChange={handleChange}>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='gender' id='gender'  label='Female'   inline  value='Female'
          onChange={handleChange} />
                <MDBRadio name='gender' id='gender' label='Male' inline  value='Male'
          onChange={handleChange} />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='email' name='email' type='email'  value={user.email}
          onChange={handleChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='mobilenumber' name='mobilenumber' type='rel'  value={user.mobilenumber}
          onChange={handleChange}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-6' label='Password ' size='lg' id='password' name='password' type='password'  value={user.password}
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

export default Register;