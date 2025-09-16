import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">📊 Super Dashboard</h1>
      <table className="table-auto border-collapse border border-gray-400 mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Produto</th>
            <th className="border px-4 py-2">Preço</th>
            <th className="border px-4 py-2">Vendedor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">R$ {p.price}</td>
              <td className="border px-4 py-2">{p.seller}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
