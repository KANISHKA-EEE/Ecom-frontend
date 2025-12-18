import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ marginLeft: "240px", padding: "20px" }}>
      {/* MAIN CONTENT */}
      <div className="main-content" style={{ paddingTop: "20px" }}>
        <h1 style={{ fontSize: "48px", color: "#0F172A", marginBottom: "20px" }}>
          Welcome to Kani Shopping
        </h1>
        <p style={{ fontSize: "20px", color: "#475569", marginBottom: "40px" }}>
          Browse categories and explore our amazing products.
        </p>

        {/* Featured Categories */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "20px", 
          marginTop: "40px" 
        }}>
          <div style={{
            padding: "30px",
            backgroundColor: "#F1F5F9",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#0F172A" }}>
              💻 Electronics
            </h3>
            <p style={{ color: "#475569", marginBottom: "20px" }}>
              Latest laptops, phones, and gadgets
            </p>
            <Link 
              to="/products" 
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#14B8A6",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "0.3s"
              }}
            >
              Shop Now
            </Link>
          </div>

          <div style={{
            padding: "30px",
            backgroundColor: "#F1F5F9",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#0F172A" }}>
              🎧 Audio
            </h3>
            <p style={{ color: "#475569", marginBottom: "20px" }}>
              Premium headphones and speakers
            </p>
            <Link 
              to="/products" 
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#14B8A6",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "0.3s"
              }}
            >
              Shop Now
            </Link>
          </div>

          <div style={{
            padding: "30px",
            backgroundColor: "#F1F5F9",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>
            <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#0F172A" }}>
              🛍️ Accessories
            </h3>
            <p style={{ color: "#475569", marginBottom: "20px" }}>
              Cases, chargers, and more
            </p>
            <Link 
              to="/products" 
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#14B8A6",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "0.3s"
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
