import { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    const updatedCart = cartItems.map(item => 
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ marginLeft: "240px", padding: "20px", textAlign: "center" }}>
        <h1>Your Cart is Empty!!</h1>
        <p>Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div style={{ marginLeft: "240px", padding: "20px" }}>
      <h1>Shopping Cart</h1>
      
      {cartItems.map(item => (
        <div key={item._id} style={{ 
          display: "flex", 
          alignItems: "center", 
          border: "1px solid #ddd", 
          borderRadius: "8px", 
          padding: "15px", 
          marginBottom: "15px",
          backgroundColor: "white"
        }}>
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: "80px", height: "80px", borderRadius: "8px", marginRight: "15px" }}
          />
          
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button 
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
              style={{ padding: "5px 10px", fontSize: "16px" }}
            >
              -
            </button>
            <span style={{ padding: "0 15px", fontSize: "18px" }}>{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
              style={{ padding: "5px 10px", fontSize: "16px" }}
            >
              +
            </button>
            
            <button 
              onClick={() => removeItem(item._id)}
              style={{ 
                marginLeft: "15px", 
                padding: "5px 15px", 
                backgroundColor: "#dc3545", 
                color: "white", 
                border: "none", 
                borderRadius: "4px" 
              }}
            >
              Remove
            </button>
          </div>
          
          <div style={{ marginLeft: "15px", fontWeight: "bold" }}>
            ₹{item.price * item.quantity}
          </div>
        </div>
      ))}
      
      <div style={{ 
        marginTop: "20px", 
        padding: "20px", 
        backgroundColor: "#f8f9fa", 
        borderRadius: "8px",
        textAlign: "right"
      }}>
        <h2>Total: ₹{getTotalPrice()}</h2>
        <button style={{
          marginTop: "10px",
          padding: "12px 30px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart