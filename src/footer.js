import React from "react";
import './footer.css'
import TopTrending from "./toptrending";
import MostViewed from "./mostviewed";
import TopCategory from "./topcategory";

function Footer() {
  return(
    <div className="footer">
    <TopTrending></TopTrending>
    <MostViewed></MostViewed>
    <TopCategory></TopCategory>
    </div>
  );
}

export default Footer