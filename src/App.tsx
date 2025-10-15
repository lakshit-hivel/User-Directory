// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import RecentlyDeleted from "./pages/RecentlyDeleted";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Header from "./components/header/header";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/create-user"
          element={isLoggedIn ? <CreateUser /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/recently-deleted"
          element={
            isLoggedIn ? <RecentlyDeleted /> : <Navigate to="/auth/login" />
          }
        />

        <Route path="/auth">
          <Route
            path="login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="register"
            element={!isLoggedIn ? <Register /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
