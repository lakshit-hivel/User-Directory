import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import CreateUser from "./CreateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
