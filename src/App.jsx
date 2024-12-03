import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const More = React.lazy(() => import("./pages/More"));

import DelayedSpinner from "./components/DelayedSpinner";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<DelayedSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
};

export default App;
