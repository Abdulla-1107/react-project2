import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import GetPage from "./pages/GetPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import DeletePage from "./pages/DeletePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/get" />} />
          <Route path="/get" element={<GetPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
