import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../api/productApi";

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
      })
      .catch((err) => console.error("Error:", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      title,
      price: Number(price),
    };

    updateProduct(id, updatedData)
      .then(() => {
        alert("Mahsulot muvaffaqiyatli yangilandi!");
        navigate("/get"); // or "/"
      })
      .catch((err) => console.error("Update xatosi:", err));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Update Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
