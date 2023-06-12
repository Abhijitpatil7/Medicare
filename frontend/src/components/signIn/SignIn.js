import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  let name, value, users, result;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleclick = async (e) => {
    result = await axios
      .post("http://localhost:8080/signin", user)
      .then((res) => {
        users = res.data;
        console.log(user);
      });
    if (user != null) {
      navigate(`/home/${users.id}`);
    }
    else{
      alert("Wrong Email or Password")
      navigate('/');
    }
  };

  return (
    <MDBContainer className="my-5" height="100%">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://wallpaperaccess.com/full/3275630.jpg"
              alt="login form"
              className="rounded-start w-100"
              height="100%"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody
              className="d-flex flex-column"
              style={{ backgroundColor: "skyblue" }}
            >
              <h1
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Medicare
              </h1>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                name="email"
                type="email"
                size="lg"
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                name="password"
                type="password"
                size="lg"
                onChange={handleChange}
              />

              <MDBBtn
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onClick={handleclick}
              >
                Login
              </MDBBtn>

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="/register/" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignIn;
