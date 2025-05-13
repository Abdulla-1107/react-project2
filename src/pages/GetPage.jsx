import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

const GetPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6">
        {data.products?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow bg-white hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain mb-2 rounded"
            />
            <h2 className="font-semibold text-lg ">Title: {product.title}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPage;
