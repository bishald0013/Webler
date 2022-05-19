import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);

// ShadowRoot.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />}>
//         <Route path='home' element={<Home />} />
//         <Route path='About' element={<About />} />
//         <Route path='Product' element={<Product />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
