import React, { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Pending" },
    { id: 2, product: "Phone", status: "Shipped" },
  ]);

  const [newOrder, setNewOrder] = useState({ id: "", product: "", status: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // to avoid reloading 
    if (!newOrder.id || !newOrder.product || !newOrder.status) {
      alert("Please fill all fields");
      return;
    }
    setOrders([...orders, newOrder]);
    setNewOrder({ id: "", product: "", status: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <b>ID:</b> {order.id} | <b>Product:</b>{" "}
            {order.product} | <b>Status:</b> {order.status}
          </li>
        ))}
      </ul>

      <h3>Add New Order</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Order ID"
          value={newOrder.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="product"
          placeholder="Product"
          value={newOrder.product}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={newOrder.status}
          onChange={handleChange}
        />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}