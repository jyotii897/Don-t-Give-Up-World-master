import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import MainContent from "./maincontent";
import './dashboard.css'

function Dashboard() {
  return (
        <div class="dashboard">
          <NavBar></NavBar>
          <MainContent></MainContent>
          <Footer></Footer>
        </div>
  );
}
export default Dashboard