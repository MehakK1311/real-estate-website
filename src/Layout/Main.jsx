import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
