import React, { useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthGuard from "./utils/authguard";
import MoviePage from "./components/MoviePage";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";
const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        const newUser = { displayName, email, photoURL };
        localStorage.setItem("user", JSON.stringify(newUser));
        dispatch(login({ name: displayName, email, photo: photoURL }));
        // navigate("/home");
      } else {
        localStorage.removeItem("user");
      }
    });
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(
        login({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    }
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<AuthGuard />}>
          <Route path="/home" element={<Home />} />
          <Route path="movie/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
