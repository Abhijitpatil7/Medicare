import React from "react";
import "./Home.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,

} from "mdb-react-ui-kit";
import { Link,useParams } from "react-router-dom";


const Home = () => {

  let id = useParams();
  let numberid = parseInt(id.id);
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCard>
          <MDBCardBody className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Welcome...!!!</h3>
            <h5 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Looking after my health today gives me a better hope for tomorrow.</h5>
            <MDBRow>
              <MDBCol md="6">
                <Link to={`/addreminder/${numberid}`}>
                  <button type="button" className="btn btn-primary btn-lg " style={{blockSize:"80px"}}>
                    Add Reminder
                  </button>
                </Link>
              </MDBCol>

              <MDBCol md="6" >
                <Link to={`/showreminders/${numberid}`}>
                  <button type="button" className="btn btn-primary btn-lg " style={{blockSize:"80px"}}>
                    Show Reminder
                  </button>
                </Link>
              </MDBCol>
            </MDBRow>
            <div style={{marginTop:"150px"}}>
            <MDBRow>
              <MDBCol md="6">
                <Link to={`/addissues/${numberid}`}>
                  <button type="button" className="btn btn-primary btn-lg " style={{blockSize:"80px"}}>
                    Add Health Issues
                  </button>
                </Link>
              </MDBCol>

              <MDBCol md="6">
                <Link to={`/showhealthissues/${numberid}`}>
                  <button type="button" className="btn btn-primary btn-lg " style={{blockSize:"80px"}}>
                    Show Health Issues
                  </button>
                </Link>
              </MDBCol>
            </MDBRow>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
