import React, { useState } from "react";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: Number(price),
    };

    console.log("Yangi product:", newProduct);

    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
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
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price ($):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
