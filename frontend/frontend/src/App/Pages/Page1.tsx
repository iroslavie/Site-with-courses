import React from "react";
import Header from "../Components/Header/Header";
import Welcome from "../Components/Welcome/Welcome";
import Courses from "../Components/Courses/Courses";
import Offer from "../Components/Offer/Offer";

const Page1 = () => {
    return (
      <div className="page1">
        <Header />
        <Welcome />
        <Courses />
        <Offer />
      </div>
    );
  };
  
  export default Page1;
  