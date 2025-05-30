import "./product.css";
import { Helmet } from "react-helmet-async";
import Path from "../../components/path/path";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = ({ Data }) => {
  const location = useLocation();
  const productDetails = location.state?.product;

  
    

  if (!productDetails) return <div>Product not found</div>;

  return (
    <>
      <Helmet>
        <title>Priya Sales | Product</title>
        <meta name="description" content="Priya Sales | Product" />
      </Helmet>
      <div id="product">
        <section className="ourStory">
          <div className="container">
            <Path pathName={"Product"} />
            <div className="row mx-2 mt-4">
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div>
                  <h1>{productDetails.productName}</h1>
                  <div className="mt-4 ms-2 ms-lg-0">
          <p><strong>Price:</strong> ₹{productDetails.productPrice}</p>
<p><strong>Specifications:</strong> {productDetails.productSpec || "N/A"}%</p>
<p><strong>Quantity:</strong> {productDetails.productQuantity}</p>
<p><strong>RAM:</strong> {productDetails.productRam || "N/A"}</p>
<p><strong>Storage:</strong> {productDetails.productRom || "N/A"}</p>
<p><strong>Operating System:</strong> {productDetails.productOS || "N/A"}</p>
<p><strong>Details:</strong> {productDetails.productDetails}</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={productDetails.productImg}
                    alt={productDetails.productName}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
