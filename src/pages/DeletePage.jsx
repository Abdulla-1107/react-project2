import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productApi";

const DeletePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    getProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Xatolik:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
      deleteProduct(id)
        .then(() => {
          alert("Mahsulot o'chirildi");
          fetchProducts(); // yangilash
        })
        .catch((err) => console.error("Delete xatosi:", err));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Delete Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow bg-white hover:shadow-md transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => handleDelete(product.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeletePage;
