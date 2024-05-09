import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductHome } from "../../redux/silce/customer/productSilce";
import { UrlImage } from "../../url";
import { Link, useNavigate } from "react-router-dom";

const URL_IMAGE = UrlImage();
const ProductHome = () => {
  const navigate = useNavigate();
  const listProduct = useSelector(
    (state) => state.customer.product.listProduct
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductHome());
  }, []);

  return (
    <div
      style={{ marginTop: "40px", marginBottom: "40px" }}
      className="container"
    >
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
        SẢN PHẨM NỔI BẬT
      </h3>
      <div className="row">
        {listProduct && listProduct.length > 0 ? (
          listProduct.map((item, index) => {
            return (
              <div
                key={`product-${index}`}
                style={{ marginBottom: "50px" }}
                className="col-3"
              >
                <div>
                  <Link to={`/detail/${item.id}`}>
                    <img
                      style={{ width: "100%", maxHeight: "200px" }}
                      src={URL_IMAGE + item.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <p
                    style={{
                      overflow: "hidden",
                      maxHeight: "1.4em",
                      lineHeight: "1.4em",
                      cursor: "pointer",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    {item.name}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    {item.price.toLocaleString("vi-VN")} đ
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>
            <h4>LOADING...</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductHome;
