import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import RecentlyDeleted from "./pages/RecentlyDeleted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/recently-deleted" element={<RecentlyDeleted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
