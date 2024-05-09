import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/customer/images/logo.JPG";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, logout } from "../../../redux/silce/customer/authSilce";
import { toast } from "react-toastify";
import { getTotal } from "../../../redux/silce/customer/cartSlice";
import { fetchAllCategory } from "../../../redux/silce/customer/categorySlice";
import { IoBagRemove } from "react-icons/io5";
import SearchInput from "../SearchInput";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.customer.auth.isAuthSucess);
  const userLogin = useSelector((state) => state.customer.auth.dataUser);
  const { categoriesList, brandList } = useSelector(
    (state) => state.customer.category
  );
  const { cartTotalQuantity, cartItem } = useSelector(
    (state) => state.customer.cart
  );
  const navigatePage = (page) => {
    navigate(page);
  };
  useEffect(() => {
    dispatch(getTotal());
    dispatch(fetchAllCategory());
    dispatch(authLogin());
  }, [cartItem]);
  const logoutClick = () => {
    dispatch(logout()).then((result) => {
      if (result.payload.success && result.payload.success === true) {
        toast.success(`${result.payload.message}`);
        navigate("/login");
      }
    });
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container style={{ backgroundColor: "white", borderRadius: "50px" }}>
          <Navbar.Brand>
            <img
              style={{ cursor: "pointer" }}
              width={"80px"}
              src={logo}
              alt=""
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => navigatePage("/")}
                style={{ color: "#000000" }}
              >
                Trang Chủ
              </Nav.Link>

              <NavDropdown
                title={"Loại Xe"}
                id="collapsible-nav-dropdown"
                active={true}
                style={{ color: "#464646" }}
              >
                {categoriesList.map((category) => (
                  <NavDropdown.Item
                    onClick={() => navigatePage(`/category/${category.id}`)}
                    key={`category-${category.id}`}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                title={"Hãng Xe"}
                id="collapsible-nav-dropdown"
                active={true}
                style={{ color: "#464646" }}
              >
                {brandList.map((brand) => (
                  <NavDropdown.Item
                    onClick={() => navigatePage(`/brand/${brand.id}`)}
                    key={`brand-${brand.id}`}
                  >
                    {brand.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link
                onClick={() => navigatePage(`/order_wait/${userLogin.id}`)}
                style={{ color: "#000000" }}
              >
                Đơn Hàng
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <IoBagRemove
                  onClick={() => navigatePage("/cart")}
                  style={{ fontSize: "35px", color: "#cc0000" }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#c6c7c8",
                    textAlign: "center",
                    lineHeight: "19px",
                    color: "white",
                  }}
                >
                  {cartTotalQuantity}
                </span>
              </Nav.Link>
              {isAuth && isAuth.success === true ? (
                <>
                  <NavDropdown title="Tài Khoản" id="collapsible-nav-dropdown">
                    {userLogin && userLogin.name && (
                      <NavDropdown.Item>
                        Hello ! {userLogin.name}
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Item onClick={() => logoutClick()}>
                      Đăng Xuất
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown
                    title="Tài Khoản"
                    id="collapsible-nav-dropdown"
                    active={true}
                    style={{ color: "#464646" }}
                  >
                    <NavDropdown.Item onClick={() => navigatePage("/login")}>
                      Đăng Nhập
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigatePage("/register")}>
                      Đăng Ký
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchInput />
    </>
  );
};

export default Header;
