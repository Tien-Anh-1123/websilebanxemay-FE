import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import logo from "../../../assets/customer/images/logo.JPG";
import { RiHomeHeartFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <MDBFooter
        style={{ backgroundColor: "#f8f9fa" }}
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <span style={{ textAlign: "center" }}></span>
          </div>
        </section>
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <img
                  src={logo}
                  alt=""
                  style={{ width: "150px", borderRadius: "10px" }}
                />
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Loại Xe</h6>
                <p>Xe Số</p>
                <p>Xe Tay Ga</p>
                <p>Xe Tay Côn</p>
                <p>Xe Phân Khối Lớn</p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Hãng Xe</h6>
                <p>Honda</p>
                <p>Yamaha</p>
                <p>Suzuki</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">LIÊN HỆ</h6>
                <p>
                  <RiHomeHeartFill /> Hà Trung - Thanh Hóa
                </p>
                <p>
                  <MdContactMail /> motoclub@gmail.com
                </p>
                <p>
                  <FaPhoneSquare /> 0989999999
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
    </>
  );
};
export default Footer;
