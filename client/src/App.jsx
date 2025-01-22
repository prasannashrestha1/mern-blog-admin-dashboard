import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <div className="p-4 md:p-8 bg-[#585858]"> */}
      <div className="bg-[#151515]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
