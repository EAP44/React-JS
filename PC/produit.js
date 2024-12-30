import React, { useState } from "react";
import HP from './HP.jpg';
import Acer from './Acer.jpg';
import Huawei from './Huawei.jpg';

const Produit = [
  { id: '1', src: HP, title: 'PC Portable Gamer HP VICTUS', price: 7490 },
  { id: '2', src: HP, title: 'PC Portable Gamer HP VICTUS', price: 2190 },
  { id: '3', src: Acer, title: 'Pc Portable Chromebook Acer', price: 3640 },
  { id: '4', src: Huawei, title: 'PC Portable - HUAWEI', price: 1270 },
];

export default function Test() {
  // State for managing total price and quantity per product
  const [cart, setCart] = useState({});

  // Function to add quantity of a product to the cart
  const handleQuantityChange = (id, qty) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      updatedCart[id] = qty;
      return updatedCart;
    });
  };

  // Function to calculate total based on cart state
  const calculateTotal = () => {
    return Produit.reduce((acc, elmt) => {
      const quantity = cart[elmt.id] || 0;
      return acc + (elmt.price * quantity);
    }, 0);
  };

  // Function to reset cart
  const resetCart = () => {
    setCart({});
  };

  return (
    <div className="container card shadow mt-5 p-5">
      <div className="row">
        {Produit.map((elmt) => (
          <div key={elmt.id} className="col">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                alt={elmt.title}
                src={elmt.src}
                width={400}
                height={200}
              />
              <div className="card-body">
                <p className="card-title">{elmt.title}</p>
                <p className="card-text">{elmt.price} MAD</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <input
                      type="number"
                      value={cart[elmt.id] || 1} // Default to 1 if no quantity
                      onChange={(e) => handleQuantityChange(elmt.id, Number(e.target.value))}
                      className="form-control m-2 col-2"
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleQuantityChange(elmt.id, cart[elmt.id] || 1)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row m-4">
        Panier : {calculateTotal()} MAD
        <button
          className="btn btn-sm btn-outline-secondary col-1 mx-3"
          onClick={resetCart}
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
