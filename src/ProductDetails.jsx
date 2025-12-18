import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product from backend
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  // Add product to cart
  const handleAddToCart = () => {
    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Item added to cart!");
  };

  // Buy now button
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart"); // use react-router-dom navigation
  };

  if (loading) return <h2>Loading product...</h2>;
  if (!product) return <h2>Product not found!</h2>;

  return (
    <div style={{ marginLeft: "240px", padding: "20px", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#0F172A" }}>
        {product.name}
      </h1>

      <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />

        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            {product.description}
          </p>

          <h2
            style={{
              fontSize: "28px",
              color: "#14B8A6",
              marginBottom: "30px",
            }}
          >
            ₹{product.price}
          </h2>

          <div style={{ display: "flex", gap: "15px" }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: "12px 24px",
                backgroundColor: "#0F172A",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                padding: "12px 24px",
                backgroundColor: "#14B8A6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
