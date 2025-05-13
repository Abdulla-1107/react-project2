import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-200 transition-colors";
  const activeClass = "bg-gray-300 font-semibold";

  return (
    <aside className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-2">
        <NavLink to="/get" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Get Products
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Create Product
        </NavLink>
        <NavLink to="/update" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Update Product
        </NavLink>
        <NavLink to="/delete" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          Delete Product
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
