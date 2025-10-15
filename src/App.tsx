// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import RecentlyDeleted from "./pages/RecentlyDeleted";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Header from "./components/header/header";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
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
            element={
              !isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="register"
            element={
              !isLoggedIn ? (
                <Register setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
