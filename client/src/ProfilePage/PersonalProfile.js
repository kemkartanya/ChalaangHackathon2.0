import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function PersonalProfile() {
  return (
    <section style={{ backgroundColor: '#f4f5f7', height: '100vh', overflow: 'scroll' }}>
      <div>
        <h1>Personal Profile</h1>
      </div>
      <MDBContainer className="py-5 h-100" style={{ padding: '0 5px', height: '100vh' }}>
        <MDBRow style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <MDBCol lg="6" style={{ marginBottom: '4px' }}>
            <MDBCard style={{ borderRadius: '0.5rem', marginBottom: '3px' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" style={{ borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem', textAlign: 'center', color: 'white', backgroundImage: 'linear-gradient(to right, #4e54c8, #8f94fb)' }}>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    style={{ width: '80px', margin: 'auto' }}
                    fluid
                  />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBTypography tag="p" className="text-muted">Web Designer</MDBTypography>
                  <MDBIcon far icon="edit" style={{ marginBottom: '5px' }} />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody style={{ padding: '1rem' }}>
                    <MDBTypography tag="h6" style={{ marginBottom: '0.5rem' }}>Information</MDBTypography>
                    <hr style={{ marginTop: '0', marginBottom: '1rem' }} />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" style={{ marginBottom: '1rem' }}>
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBTypography tag="p" className="text-muted">info@example.com</MDBTypography>
                      </MDBCol>
                      <MDBCol size="6" style={{ marginBottom: '1rem' }}>
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBTypography tag="p" className="text-muted">123 456 789</MDBTypography>
                      </MDBCol>
                    </MDBRow>

                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                      <a href="#!" style={{ marginRight: '1rem' }}><MDBIcon fab icon="facebook" size="lg" /></a>
                      <a href="#!" style={{ marginRight: '1rem' }}><MDBIcon fab icon="twitter" size="lg" /></a>
                      <a href="#!" style={{ marginRight: '1rem' }}><MDBIcon fab icon="instagram" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
