import React, { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const prices = {
    Pen: 10,
    Notebook: 50,
    Stapler: 120,
    Marker: 30,
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setUnitPrice(prices[product]);
    const sub = quantity * prices[product];
    setSubtotal(sub);
    calculateDiscountAndTotal(sub);
  };

  const handleQuantityChange = (e) => {
    const qty = parseFloat(e.target.value) || 0;
    setQuantity(qty);
    const sub = qty * unitPrice;
    setSubtotal(sub);
    calculateDiscountAndTotal(qty);
  };

  const calculateDiscountAndTotal = (qty) => {
    const disc = qty > 20 ? subtotal * 0.1 : 0;
    setDiscount(disc);
    setTotal(subtotal - disc);
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2> Place Order</h2>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              {selectedProduct || "Products"}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a
                  className="dropdown-item active"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProductSelect("Pen");
                  }}
                >
                  Pen
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProductSelect("Notebook");
                  }}
                >
                  Notebook
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProductSelect("Stapler");
                  }}
                >
                  Stapler
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleProductSelect("Marker");
                  }}
                >
                  Marker
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-2">
            <label>Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              className="form-control"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>

          <div className="mb-2">
            <label>Unit Price</label>
            <input
              type="number"
              value={unitPrice}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Subtotal</label>
            <input
              type="number"
              value={subtotal}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Discount</label>
            <input
              type="number"
              value={discount}
              readOnly
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label>Total</label>
            <input
              type="number"
              value={total}
              readOnly
              className="form-control"
            />
          </div>

          <button className="btn btn-success mb-2"> Place Order </button>
        </form>

        <Link to={"/services"} className="btn btn-success">
          Go to services form
        </Link>
      </div>
    </div>
  );
}

export default User;
