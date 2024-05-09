import banner1 from "../../assets/customer/images/banner-xemay1.jpg";
import banner2 from "../../assets/customer/images/banner-xemay2.png";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Banner = () => {
  return (
    <>
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <img src={banner2} className="d-block w-100" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={banner1} className="d-block w-100" alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={banner1} className="d-block w-100" alt="..." />
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
};
export default Banner;
