import React from "react";
import Title from "../../Components/Title";
import Project1 from "../../Components/Projects/Project1";
import Project2 from "../../Components/Projects/Project2";
import Project3 from "../../Components/Projects/Project3";

const Portfolio = () => {
  return (
    <>
      <div className="my-10">
        <Title title={"Portfolio"}></Title>
      </div>
      <div className="my-20">
        <Project1/>
        <Project2/>
        <Project3/>
      </div>
    </>
  );
};

export default Portfolio;
